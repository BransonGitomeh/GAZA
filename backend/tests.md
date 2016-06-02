creating a new contact
query:
`
mutation newContact($name:String, $number:String){
  create{
    contact (name:$name, number:$number){
      id
    }
  }
}
`
with
variables:
`
{
  "name": "Branson",
  "number": "1762345678"
}
`


to get all the contacts

`
query{
  contacts{
    name,
    number
  }
}
`

