import {Schema} from 'mongoose'

let SongItemSchema = new Schema({
    a_string: String,
    a_date: Date
})

export default SongItem = mongoose.model('SongItem', SongItemSchema)

