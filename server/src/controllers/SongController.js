import SongItem from '../models/SongItem'
import seedrandom from 'seedrandom'

export default {
  async register (req, res) {
    let song = new SongItem(req.body)

    try {
      const response = await song.save()
      res.send('Registered new song:' + response._id)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to register new song'
      })
    }
  },
  async findById (req, res) {
    try {
      let song = await SongItem.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to find song'
      })
    }
  },
  async getRandom (req, res) {
    try {
      // Validate for invalid indexes
      if (req.params.index < 1) 
        throw "Invalid index"

      // Get document count for no. of song items
      const count = await SongItem.estimatedDocumentCount()
      let random = 0

      // setting up PRNG with seed
      let rng = seedrandom(req.params.seed)
      for (let i = 0; i <= req.params.index; i++) {
        random = rng()
      }

      random = Math.floor(random * count)
      let song = await SongItem.findOne().skip(random)

      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to fetch random song'
      })
    }
  }
}
