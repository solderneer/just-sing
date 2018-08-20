import mongoose from 'mongoose'

let Schema = mongoose.Schema

let SongItemSchema = new Schema({
  a_string: String,
  a_date: Date
})

export default mongoose.model('SongItem', SongItemSchema)
