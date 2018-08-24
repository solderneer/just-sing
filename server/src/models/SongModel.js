import mongoose from 'mongoose'

let Schema = mongoose.Schema

let SongSchema = new Schema({
  name: String,
  artist: String,
  rating: Number,
  cover: String
})

export default mongoose.model('SongModel', SongSchema)
