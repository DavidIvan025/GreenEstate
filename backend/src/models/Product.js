const { Schema, model } = require('mongoose');

var productSchema = new Schema({
    name: String,
    price: Number,
    tag: String,
    description: String,
    inStock: Boolean,
    createdOn: Date
});

module.exports = model("product", productSchema);