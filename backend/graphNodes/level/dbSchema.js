var contact = {
  identity: 'level',
  attributes: {
    name: {
      type: 'string',
    },
    university: { model: "university" },
    students:{
      collection:"student",
      via:"level"
    }
  }
}

module.exports = contact;
