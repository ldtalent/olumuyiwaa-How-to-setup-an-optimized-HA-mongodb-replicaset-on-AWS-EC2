'use strict';
/**
 * Module dependencies
 */
const Mongoose = require('mongoose');

/**
 * Albums Schema
 */
const AlbumSchema = new Mongoose.Schema({
    owner: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
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
 * Create Schema Secondary Indexes
 */
AlbumSchema.index({"photos.filename": 1 });

/**
 * Compile Schema to Model
 */
const AlbumModel = Mongoose.model('Albums', AlbumSchema);

/**
 * Export AlbumModel
 */
module.exports = AlbumModel;