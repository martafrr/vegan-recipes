const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const recipeSchema = new Schema({
    id: String, 
    name: String,
    headline: String, 
    ingredients: [String], 
    description: String, 
    image: String, 
    difficulty: Number,
    recipients: [RecipientSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    rating: { type: Number, default: 0 },
});

mongoose.model('recipes', recipeSchema);