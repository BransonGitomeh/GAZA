# ProjectExpresso 

This is a project to show how to work with a Express app with GraphQL and MongoDB persistence with waterline ORM...

## How to install the example

```bash
$ git clone https://github.com/kamikazechaser/projectexpresso.git
$ npm install
$ npm start
```
---

## Using it
This GraphQL example doesn't have any UI. It responds to ajax queries and requests.

For easyness, we will use Postman to make queries. For a GraphQL query you must use `POST` always to the `/graph` of the server (in this case, `localhost:3000/graph`) and set set the header `Content-Type: application/graphql`:

* Asking for the contact with ID 0 (actually, the position 0 on the user list for easyness)
```graphql
query  {
	user (id:0) {
    	number
        surname
    }
}
```
Gives
```json
{
    "data": {
        "contact": {
            "number": "072456876",
            "surname": "Stallman"
        }
    }
}
```

* Asking for the name, surname, age and ID of user with ID 2
```graphql
query {
	contact (id:2) {
    	number
        surname
        age
        _id
    }
}
```
Gives
```json
{
    "data": {
        "user": {
            "number": "3456765456",
            "surname": "Torvalds",
            "age": 8,
            "_id": "55ddeec2a54c37e61e0a2120"
        }
    }
}
```
* Adding a new user called Linus Torvalds of age 45 and getting the new info
```graphql
mutation RootMutation {
	addContact (number: "r45678765", surname:"Stroustrup", age:64) {
    	name
        surname
        _id
        age
    }
}
```

Gives
```json
{
    "data": {
        "addContact": {
            "number": "r45678765",
            "surname": "Stroustrup",
            "_id": "55ddf61ed082460325e2b65c",
            "age": 64
        }
    }
}
```
Checking MongoDB:
```javascript
{
	"number" : "r45678765",
	"surname" : "Stroustrup",
	"age" : 64,
	"_id" : ObjectId("55ddf61ed082460325e2b65c"),
	"id" : "55ddf61ed082460325e2b65b",
	"__v" : 0
}
```

## GraphQL
GraphQL is a new concept to define queries around a front end. It's a mix between SQL and REST but the best way to understand it is through a example.

## The example application
The application is pretty simple, uses an index.js where Express is getting configured and where it imports the Schema of the app.

Our only endpoint will be '/graph' and '/'. Soon you will see that we don't need more.

lets start with the models

### Models
In the models is where most of the magic is happening.

When you open it, you will see a subfolder called contact.
* Every model has a **type.js** ,**mutations.js** , **queries.js** and **dbSchema.js**
* This is made so that each model is self sufficient, 

So, in any normal development we could have a Waterline schema  that we use to connect to our DB instance. Nothing has change yet.

#### The concept of Query and Mutation
In GraphQL we are going to separate the actions of our API between **Queries** (they don't alter the DDBB so they can be processed in parallel, typical GET in REST or SELECT * FROM... in SQL) and **Mutations** (they alter the database and they are processed serially, a POST, DELETE, PUT in REST or a DELETE FROM, INSERT INTO... in SQL)

### 4 files for every GraphQL "model"

This is a personal preference, to split the Model in 4 files as the could grow dangerously and I don't like big (>1000 lines) files.

* **type.js** -> This is what we could call GraphQL model where you establish the fields it has, their type (string, int...) and so on.
* **mutations.js** -> Here we will describe the mutations, the actions that can alter the database.
* **queries.es6** -> The queries against this model on the database, they can't alter it.
* **schema.es6** -> The schema on the database, has all the fields that are related to the entity, then you select the once you want to be exposed by graphQl.


### 2 files to manage the "models"  and schema, to keep everything in check at once place

* **graphSchema.js** -> A file to govern all the graphQl schemas... I mean... A single point of entrance to the entire data graph.
* **dbSchema.js** -> A file to govern all the database schemas... I mean... A single point of entrance to the entire database level relationships and available fields. 

### User type file
The type file is where we really define the properties of an model. We define *what it is compose of* but we aren't defining yet what it can do.

So, for example, a typical contacts Type file could be like the following:

```javascript
var graphQl = require("graphql")

module.exports = new graphQl.GraphQLObjectType({
	name: 'contact',
	description: 'this is a single contact',
	fields: () => ({
		id: {
			type: graphQl.GraphQLID
		},
        number: {
			type: graphQl.GraphQLString
		},
		name: {
			type: graphQl.GraphQLString
		}
	})
})
```

1. We define a **name** for the type so it can be recognized through the entire schema and in our calls
2. We define a **description** in case we ask (through a http call - aka **introspection**) to know information about the exposed schema (we will cover how to do this later).
3. And we define **fields** as properties of the model:
  1. **id** as a unique ID (GraphQLID) in the DDBB,
  2. **number**
  3. **surname**...

Really really simple, isn't it?

### Contacts Queries file
In the User Queries, we will define the type of operations that **can ask** for information to our persistence layer (our database) **but cannot modify the database**.

```javascript
var graphQl = require("graphql")
var assert = require("assert")
...

module.exports = {
    contact: {
        args: {
            id: {
                type: graphQl.GraphQLID
            }
        },
        type: require("./type"),
        resolve: function (root, args) {
            return new Promise((resolve, reject) => {
                console.log(args)
                db.collections.contact.findOne(args).exec(function (err, contacts) {
                    assert.ifError(err)
                    resolve(contacts)
                })
            })
        }
    },....
```
1. We define the type of object we will query. Here 'contacts' means that we will ask for a response like `{contact:"id"}` when we make a query like `query Query { contact }`
2. **type** We have to define a type for the returning object. In this case is the *ContactType* that we have defined previously.
3. **args** Arguments for the query, in this case we have defined an id argument. So our query could be `query { user (id:1) }` to ask for the id 1 of the database.
4. **resolve** This was the most difficult part to understand for me. Resolve is the function to execute in your system to retrieve the queried object. It always has a *root* param and the second param, that are arguments. Resolve must also **return a promise** but I'm not sure if this is mandatory. In our case, resolve creates a Promise, makes a query using Waterline and directly returns the result.

### User Mutations file
Our mutations file will contain operations to execute serially that can alter our database. It's very similar to the queries file:

```javascript
var graphql = require("graphql")
var assert = require("assert")
var waterline = require("waterline")
...

module.exports = {
    create: {
        args: {
            id: {
                type: graphql.GraphQLID
            },
            name: {
                type: graphql.GraphQLID
            }
        },
        type: new graphql.GraphQLObjectType({
            name: 'createContact',
            description: 'this is a mutation to help directly a contact.',
            fields: () => ({
                id: {
                    type: graphql.GraphQLID
                },
                name: {
                    type: graphql.GraphQLString
                },
                createdAt:{
                    type: graphql.GraphQLString
                },
                updatedAt:{
                    type: graphql.GraphQLString
                }
            })
        }),
        resolve(root, args) {
            console.log(args)
            return new Promise((resolve, reject) => {
                console.log(args)
                db.contact.create(args).exec(function (err, contact) {
                    assert.ifError(err)
                    console.log(contact)
                    resolve(contact)
                })
            })
        }
    }
    ...
    // update:
    // delete:
}
```
1. We define an operation called **create** to add new contacts to the database.
2. In **args** we defined the arguments that must be passed to execute the operation: *number* and *surname* as mandatory and *age* as optional, this is achieved with the `new GraphQLNonNull()` object.
3. **resolve** must also return a promise. Here we create a new Mongoose User object and save then returning a promise.

### graphShema file
Finally when defining all the models, this will hold all the information previously done.

```javascript
import _UserType from './HobbyTypeQL.es6';
import _UserQueries from './UserQueriesQL.es6';
import _UserMutations from './UserMutationsQL.es6';

export const UserType = _UserType;
export const UserQueries = _UserQueries;
export const UserMutations = _UserMutations;
```

This is not mandatory at all, but structurally I liked more the approach of putting all schema's and mutations in one file for easy refrences, the schema.

---

## The schema file
Schema is a bit more complex. We will join here all the models operations.

```javascript
var graphql = require("graphql")

var schema = new graphql.GraphQLSchema({
  // READS
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contact: require("./contact/queries").contact,
      contacts: require("./contact/queries").contacts
    }
  }),

  // Mutation Create
  mutation: new graphql.GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      // all create mutation types
      create: {
        type: new graphql.GraphQLObjectType({
          name: 'RootCreationType',
          fields: {
            contact: require("./contact/mutations").create
          }
        }),
        resolve:function(){return false}
      }
      
    }
  })
});

module.exports = schema;
```

1. We create a GraphQLObjectType for queries, in this case called `RootQuery` and a mutation object called `MutationQuery`.
2. We must give both a **name** (don't know very well why yet because you don't need to use it)
3. Then you must add, as **fields** all the operations that we have defined previously. In our case we have given the same name to the operations in our queries and mutations file than here.
4. Finally, we must create a GraphQLSchema object to add the query and mutation object.

We have our schema complete. Now we only have to expose it through an endpoint.

## The Server
The server is a common Waterline+Express server with a small modification:

```javascript
app.post('/graph', (req, res) => {
  //Execute the query
  graphql(schema, req.body).then((result) => {
      res.send(result);
  });
});
```

1. We must know that our GraphQL queries must come with the `application/graphql` Content-Type. We use body-parser to get the response.
2. Then we define an endpoint in '/' to receive **all queries and mutations**. This is completely different on how you would do it in RESTful.
3. Finally, we call the `graphql()` function with out defined schema. Pretty simple.

---

# Relay
You can see a more complex example of this using Relay in future:

# Contributions
Please feel free to help, specially with grammar mistakes as english is not my mother language and I learned it watching "one and a half men" :) :smirk:

Any other contribution must be on the road of simplicity to understand and to help others to learn GraphQL. Contributions  must have a README file associated or to update this.

Au Revoir <3
