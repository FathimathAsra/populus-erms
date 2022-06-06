
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


let Assets = new Schema({
    name: {
        type: String,
        trim: true
    },
    admin: {
        type: String,
        trim: true
    },
    location: {
        type: String,
    },
    value: {
        type: String,
    },

}, {
    collection: 'assets'
})


export default mongoose.model('Assets', Assets);