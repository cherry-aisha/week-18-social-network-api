const { Schema, model } = require('mongoose');
const Response = require('./Response');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtBody: {
      type: String,
      required: 'You need to share a thought!',
      minLength: 1,
      maxlength: 350
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp =>dateFormat(timestamp)
    },
    username: {
      type: String,
      default: true,
    },
    reactions:
      [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `responses` that gets the amount of response per video
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Video model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
