var contact = {
  identity: 'event',
  attributes: {
    name: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    other_details: {
      type: 'string',
    },
    church: { model: "church" }
  }
}

module.exports = contact;
