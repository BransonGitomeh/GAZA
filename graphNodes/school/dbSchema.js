var contact = {
  identity: 'school',
  attributes: {
    name: {
      type: 'string',
    },
    university: { model: "university" },
    departments: { 
      collection: "department", 
      via:"school" 
    }
  }
}

module.exports = contact;
