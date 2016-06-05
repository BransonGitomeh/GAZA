var contact = {
  identity: 'message',
  attributes: {
    names: {
      type: 'string',
    },
    DOB: {
      type: 'string',
    },
    other_details: {
      type: 'string',
    },
    church: { model: "church" }
  }
}

module.exports = contact;
