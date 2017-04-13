import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let exampleSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Example', exampleSchema);