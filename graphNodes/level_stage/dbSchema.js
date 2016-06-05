var contact = {
  identity: 'level_stage',
  attributes: {
    name: {
      type: 'string',
    },
    university: { model: "university" },
    students:{
      collection:"student",
      via:"level_stage"
    }
  }
}

module.exports = contact;
