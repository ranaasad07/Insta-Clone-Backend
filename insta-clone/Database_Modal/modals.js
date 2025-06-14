const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: ''
  },
  Otp: {
    type: String,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  bio: {
    type: String
  },
  gender: {
    type: String
  },
  showSuggestions: {
    type: Boolean,
    default: false
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, { timestamps: true });


// Post schema
const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  mediaUrl: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    default: '',
  },
  mediaType: {
    type: String,
    enum: ['image', 'video'],
    required: true,
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
const User = mongoose.model('User', userSchema);
module.exports = { User ,Post};


