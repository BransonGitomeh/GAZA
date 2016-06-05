var contact = {
  identity: 'message',
  attributes: {
    message: {
      type: 'string',
    },
    timeRecieved: {
      type: 'string',
    },
    member: {model: "member"},
    
    church: { model: "church" }
  }
}

module.exports = contact;
