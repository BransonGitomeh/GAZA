var contact = {
  identity: 'member',
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
    church: { model: "church" },
    messages: {
      collections: "message",
      via:"member"
    }
  }
}

module.exports = contact;
