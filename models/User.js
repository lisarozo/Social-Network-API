const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: "Username is Required"
        },
          email: {
            type: String,
            unique: true,
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
          },

UserSchema.virtual('username').get(function() {
    return this.email.slice(0, this.email.indexOf('@'));
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;