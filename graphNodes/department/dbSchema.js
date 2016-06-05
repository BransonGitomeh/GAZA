var contact = {
  identity: 'department',
  attributes: {
    name: {
      type: 'string',
    },
    school: { model: "school" },
    units: { collection: "unit", via:"department" }
  }
}

module.exports = contact;
