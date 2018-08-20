import mongoose from 'mongoose'

let Schema = mongoose.Schema

let SongItemSchema = new Schema({
  name: String,
  artist: String,
  rating: Number,
  length: Number
})

export default mongoose.model('SongItem', SongItemSchema)
