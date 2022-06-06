import mongoose from 'mongoose'
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  task: {
    type: String
  }
}, {
    collection: 'todos'
  })

  export default mongoose.model('Todo', todoSchema)