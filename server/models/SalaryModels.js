
import mongoose from 'mongoose'
const Schema = mongoose.Schema;


let Salary = new Schema({
    employee: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true
    },
    month: {
        type: String,
    },
    status: {
        type: String,
    },
    remarks: {
        type: String,
    },
}, {
    collection: 'salary'
})


export default mongoose.model('Salary', Salary);