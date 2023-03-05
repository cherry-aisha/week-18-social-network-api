const { Reaction, Thought } = require('../models/Reaction');

// Get All Reactions
module.exports = {
// create a new reaction
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { reactions: reaction._id } },
          { new: true }
        );
      })
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: 'reaction created, but found no thought with that ID',
            })
          : res.json('Created the reaction 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
}