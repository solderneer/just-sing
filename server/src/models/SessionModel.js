import mongoose from 'mongoose'

let Schema = mongoose.Schema

let SessionSchema = new Schema({
    index_array: [Number]
})

export default mongoose.model('SessionModel', SessionSchema)