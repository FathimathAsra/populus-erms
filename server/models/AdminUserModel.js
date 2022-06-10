
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


let AdminUser = new Schema({
    adminname: {
        type: String,
    },
    position: {
        type: String,
    },
    phoneno: {
        type: String,
    },
    department: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    education: {
        type: String,
    },
    mstatus: {
        type: String,
    },
    password: {
        type: String,
    },
}, {
    collection: 'adminuser'
})


export default mongoose.model('AdminUser', AdminUser);
