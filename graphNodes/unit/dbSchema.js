var contact = {
  identity: 'unit',
  attributes: {
    name: {
      type: 'string',
    },
    department: { model: "department" },
    prices: { collection: "price", via:"unit" }
  }
}

module.exports = contact;
