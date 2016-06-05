var contact = {
  identity: 'study_mode',
  attributes: {
    name: {
      type: 'string',
    },
    university: { model: "university" },
    students:{
      collection:"student",
      via:"study_mode"
    }
  }
}

module.exports = contact;
