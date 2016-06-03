var contact = {
  identity: 'university',
  attributes: {
    name: {
      type: 'string',
    },
    courses:{
      collection:"course",
      via:"university"
    },

    levels: {
      collection: "level",
      via:"university"
    },

    level_stages: {
      collection: "level_stage",
      via:"university"
    },

    study_modes: {
      collection: "study_mode",
      via:"university"
    },
    
    semesters: {
      collection: "semester",
      via:"university"
    },
    
    payment_channels: {
      collection: "payment_channel",
      via:"university"
    },
    
    schools: {
      collection: "school",
      via:"university"
    },
  }
}

module.exports = contact;
