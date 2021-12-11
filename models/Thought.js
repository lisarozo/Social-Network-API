const { Schema, Model } = require("mongoose");
const objId = Schema.ObjectId;
const reactionSchema = new Schema ({
    reactionId: {default: objId},
    reactionBody: {type: String, required: true, max: 280},
    username: {type: String, required},
    createdAt: {type: Date, timestamp: { type: Date, default: Date.now },
    get: timeFormat,}
})
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    timestamp: { type: Date, default: Date.now },
    get: timeFormat,
  },
  userName: {
    type: String,
    required: "Username is Required",
  },
  reactions: {
      type: [reactionSchema]
  }
});
function timeFormat(time) {
  //need to format time
}
