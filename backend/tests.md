creating a new contact
query:
`
mutation newStudent($s_a:String, $regNo:String, $names:String, $DOB:String, $Gender:String, $nationality:String, $id_passport:String, $maritalStatus:String, $contacts:String, $hometown:String, $email:String, $qualification:String, $grade:String, $teachingExperience:String, $sponcership:String, $disabled:String, $studymode:String, $course:String){
  create{
    student (s_a:$s_a, regNo:$regNo, names:$names, DOB:$DOB, Gender:$Gender, nationality:$nationality, id_passport:$id_passport, maritalStatus:$maritalStatus, contacts:$contacts, hometown:$hometown, email:$email, qualification:$qualification, grade:$grade,teachingExperience:$teachingExperience, sponsership:$sponcership, disabled:$disabled, studymode:$studymode, course:$course){
      id
    }
  }
}
`
with
variables:
`
{
  "s_a": "aa",
  "regNo": "awes",
  "names": "aa",
  "DOB": "dob",
  "Gender": "gender",
  "nationality": "kenya",
  "id_passport": "32357377",
  "maritalStatus": "single",
  "contacts": "456789876543",
  "hometown": "kisumu",
  "email": "sirbranson67@gmail.com",
  "qualification": "f4",
  "grade": "1",
  "teachingExperience": "teaching",
  "sponcership": "self",
  "disabled": "true",
  "studymode": "evening",
  "course": "diploma education"
}
`


to get all the contacts

`
query{
  students{
    id,
    regNo,
    studymode
  }
}
`

will result to 
`
{
  "data": {
    "students": [
      {
        "id": "1",
        "regNo": "awes",
        "studymode": "evening"
      }
    ]
  }
}
`

