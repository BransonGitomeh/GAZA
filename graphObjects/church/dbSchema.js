var contact = {
  identity: 'church',
  attributes: {
    name: {
      type: 'string',
    },
    number: {
      type: 'string',
    },
    events: {
      collection:"event",
      via:"church"
    },
    members: {
      collection:"member",
      via:"church"
    }
  }
}

module.exports = contact;
