const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true, max: 100},
    author: {type: String, required: true, max: 100},
    body: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Post', PostSchema);