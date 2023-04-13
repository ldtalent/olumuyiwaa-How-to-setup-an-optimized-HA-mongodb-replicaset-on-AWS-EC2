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
        type: String,
        required: true
    },
    photos: {
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
    }
});

/**
 * Create Schema Secondary Indexes
 */
AlbumSchema.index({owner: 1, "photos.filename": 1});

/**
 * Compile Schema to Model
 */
const AlbumModel = Mongoose.model('Albums', AlbumSchema);

/**
 * Export AlbumModel
 */
module.exports = AlbumModel;