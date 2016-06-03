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


updating a university
`
mutation createUniversity($id:String,$name:String) {
  update{
    university(id:$id,name:$name){
      id
    }
  }
}
`

and variables
`
{
  "id": "5750ab7130c7a65225e50dfc",
  "name":"wiuwiuwiuwiuwiu"
}
`

finding courses and university
`
{
  courses{
    id,
    name,
    university{
      id,
      name
    }
  }
}
`

to get a single university

`
query ($id:String) {
	university(id:$id){
    id,
    name,
    courses{
      id,
      name
    },
    levels{
      id,
      name
    },
    level_stages{
      name
    },
    study_modes{
      name
    },
    semesters{
      id,
      name
    },
    payment_channels{
      name
    }
  }
}


and also 

`
query ($id:String) {
	university(id:$id){
    id,
    name,
    schools{
      id,
      name,
      departments {
        id,
        name,
        units{
          id,
          name,
          prices{
            ammount
          }
        }
      }
    }
  }
}
`

`
and variables are 
`
{
  "id": "57488aa921a7257c2e5488f6"
}
`


to create a new level

`
mutation createLevel($university:String,$name:String) {
  create{
    level(university:$university,name:$name){
      id
    }
  }
}
`

`
{
  "university": "57488aa921a7257c2e5488f6",
  "name": "Diploma"
}
`


to create a new level

`
mutation ($university:String,$name:String) {
  create{
    level_stage(university:$university,name:$name){
      id
    }
  }
}
`

`
{
  "university": "57488aa921a7257c2e5488f6",
  "name": "1.3"
}
`