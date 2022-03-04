const mongoose = require('mongoose');

const IngredientSchema = mongoose.Schema({
    ingredient: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ingredient', IngredientSchema);