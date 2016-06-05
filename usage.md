Intent is to make a simple backend to a church system
 # church/branch instance
### to create a church

```
mutation ($name:String) {
  create{
    church(name:$name){
      id
    }
  }
}
```
With the variables
```
{
    "name":"Deliverane church"
}
```
Will return
```
{
  "data": {
    "create": {
      "church": {
        "id": "5754247f26e0c6e508272620"
      }
    }
  }
}
```

notes:
the creation of a church will only return an id, you can then store the details 
you sent together with this returned id in a storage on the client to show later 
if need be .


### to get all the churches saved
```
{
  churches{
    id,
    name
  }
}
```
Will return an array
```
{
  "data": {
    "churches": [
      {
        "id": "5754254717fab1450f66bb21",
        "name": "Gathering"
      }
    ]
  }
}
```

This pattern is repeted over to the rest of the objects in the church, only that now the 
objects will be connected to the church as the root object so that they are relevant



## Events

### to create an event for church

```
mutation ($church:String, $name:String, $date:String, $other_details:String) {
  create{
    event(church:$church, name:$name, date:$date, other_details:$other_details){
      id
    }
  }
}
```


With the variables
```
{
    "church":"5754254717fab1450f66bb21",
    "name":"Baptism",
    "date":"3456787654",
    "other_details":"this event will be awesome bla bla bla"
}
```
Will return
```
{
  "data": {
    "create": {
      "church": {
        "id": "5754247f26e0c6e508272620"
      }
    }
  }
}
```

notes:
the creation of a church will only return an id, you can then store the details 
you sent together with this returned id in a storage on the client to show later 
if need be .


### to get all the churches saved, plus the evnts in each
```
{
  churches{
    id,
    name,
    events{
      date,
      other_details,
      name
    }
  }
}
```
Will return an array
```
{
  "data": {
    "churches": [
      {
        "id": "5754254717fab1450f66bb21",
        "name": "Gathering",
        "events": [
          {
            "date": "3456787654",
            "other_details": "this event will be awesome bla bla bla",
            "name": "Baptism"
          }
        ]
      }
    ]
  }
}
```



## Messages

### to create a messages for your church

```
mutation ($church:String, $member:String, $message:String) {
  create{
    message (church:$church, member:$member, message:$message){
      id
    }
  }
}
```


With the variables
```
{
  "church": "5754254717fab1450f66bb21",
  "member": "5754342e01d423ef1d8d617e",
  "message": "this is an awesome message to the church"
}
```
Will return
```
{
  "data": {
    "create": {
      "message": {
        "id": "575439da5e62862023528ff4"
      }
    }
  }
}
```

notes:
the creation of a member will only return an id, you can then store the details 
you sent together with this returned id in a storage on the client to show later 
if need be .


### to get all the churches saved, plus the members in each
```
{
  churches{
    id,
    name,
    messages {
      sender,
      timeReceived
      message,
      member {
        names
      }
    }
  }
}
```
Will return an array
```
{
  "data": {
    "churches": [
      {
        "id": "5754254717fab1450f66bb21",
        "name": "Gathering",
        "members": [
          {
            "DOB": "22/12/32324",
            "other_details": "other details support will be added",
            "names": "Branson Gitomeh Kuria"
          }
        ]
      }
    ]
  }
}
```



## Members

### to create a member for church

```
mutation ($church:String, $names:String, $DOB:String, $other_details:String) {
  create{
    member (church:$church, names:$names, DOB:$DOB, other_details:$other_details){
      id
    }
  }
}
```


With the variables
```
{
    "church":"5754254717fab1450f66bb21",
    "names":"Branson Gitomeh Kuria",
    "DOB":"22/12/32324",
    "other_details":"other details support will be added"
}
```
Will return
```
{
  "data": {
    "create": {
      "member": {
        "id": "5754311413e706041a29296a"
      }
    }
  }
}
```

notes:
the creation of a member will only return an id, you can then store the details 
you sent together with this returned id in a storage on the client to show later 
if need be .


### to get all the churches saved, plus the members in each
```
{
  churches{
    id,
    name,
    members{
      DOB,
      other_details,
      name
    }
  }
}
```
Will return an array
```
{
  "data": {
    "churches": [
      {
        "id": "5754254717fab1450f66bb21",
        "name": "Gathering",
        "members": [
          {
            "DOB": "22/12/32324",
            "other_details": "other details support will be added",
            "names": "Branson Gitomeh Kuria"
          }
        ]
      }
    ]
  }
}
```

