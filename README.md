# expresscontacts

to create a new contact, post the following string to /graph in the body, under the field "query"
` 'mutation { create { contact(name:"foo") { id } } }' `

It will create a contact named foo and in responce return the new id of the new contact.


to get all the contacts or a range of contacts,

` 'query { contacts(first:10) { id, name, createdAt } } ' `

this will return 10 of the most recent contacts and only the fields `id, name and createdAt` .
This fields can be added, or reduced as you please, and it'll all work. the field `first` can also take the maximum available to retun all the records.
but if you will not render all those objects at once . its best to ask for the minimum you need to reduce network responce lag times


to ask for once single contact,

` 'query { contact (id:10) { name, createdAt } } ' `

this will return the contact that owns that id only the fields, as shown in the query `id, name and createdAt` .
