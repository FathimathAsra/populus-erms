
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


let Employee = new Schema({
    name: {
        type: String,
        trim: true
    },
    position: {
        type: String,
        trim: true
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
    salary: {
        type: String,
    },
}, {
    collection: 'employeesdb'
})


    export default mongoose.model('Employee', Employee);