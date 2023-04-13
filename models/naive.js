'use strict';
/**
 * Module dependencies
 */
const 
    Mongoose = require('mongoose'),
    argon2 = require('argon2');

/**
 * User Schema
 */
const UserSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    hasPhotos: {
        type: Boolean,
        required: true,
        default: false
    },
    photos: [{
        filename: {
            type: String,
            default: ''
        },
        createdAt: {
            type: Date,
            default: Date.now,
            required: true
            },
        fullsize: {
            type: String
        },
        thumbnail: {
            type: String
        }
    }]
  });

/** 
 * User Schema Methods
 */
UserSchema.methods.generateHash = async function (password) {
    return await argon2.hash(password);
};

UserSchema.methods.validatePassword = async function (candidate) {
    return await argon2.verify(this.password, candidate);
};
/**
 * Create Schema Secondary Indexes
 */
UserSchema.index({"photos.filename": 1 });

/**
 * Compile Schema to Model
 */
const UserModel = Mongoose.model('User', UserSchema);

/**
 * Export UserModel
 */
module.exports = UserModel;