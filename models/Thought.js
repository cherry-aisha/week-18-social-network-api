const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat')

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtBody: {
      type: String,
      required: "You need to share a thought!",
      minLength: 1,
      maxlength: 350
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true,
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

// Create a virtual property `responses` that gets the amount of response per thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.thoughtBody} ${this.createdAt} ${this.username} ${this.reactions}`;
  });

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;