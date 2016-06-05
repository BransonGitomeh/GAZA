var contact = {
  identity: 'payment_channel',
  attributes: {
    channel_name: {
      type: 'string',
    },
    channel_number: {
      type: 'string',
    },
    location: {
      type: 'string',
    },
    university: { model: "university" }
  }
}

module.exports = contact;
