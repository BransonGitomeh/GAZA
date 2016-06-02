var contact = {
  identity: 'student',
  attributes: {
    "s/a": {
      type: 'string',
    },
    regNo: {
      type: 'string',
    },
    names: {
      type: 'string',
    },
    DOB: {
      type: 'string',
    },
    Gender: {
      type: 'string',
    },
    nationality: {
      type: 'string',
    },
    "id/passport": {
      type: 'string',
    },
    maritalStatus: {
      type: 'string',
    },
    contacts: {
      type: 'string',
    },
    hometown: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    qualification: {
      type: 'string',
    },
    grade: {
      type: 'string',
    },
    teachingExperience: {
      type: 'string',
    },
    sponsership: {
      type: 'string',
    },
    disabled: {
      type: 'string',
    },
    
    // to plae the student correctly in the university
    course: {
      model: "course"
    },

    level: {
      model: "level"
    },

    level_stage: {
      model: "level_stage"
    },

    study_mode: {
      model: "study_mode"
    },
  }
}

module.exports = contact;
