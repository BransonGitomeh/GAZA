var contact = {
  identity: 'course',
  attributes: {
    name: {
      type: 'string',
    },
    university: { model: "university" },
    students:{
      collection:"student",
      via:"course"
    }
  }
}

module.exports = contact;
