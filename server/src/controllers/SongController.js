import SongItem from '../models/SongItem'

async register (req, res) {
    await SongItem.create()
}