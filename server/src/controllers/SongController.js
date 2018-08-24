import SongModel from '../models/SongModel'
import SessionModel from '../models/SessionModel'
import seedrandom from 'seedrandom'

export default {
  async register (req, res) {
    let song = new SongModel(req.body)

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
      let song = await SongModel.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to find song'
      })
    }
  },
  async getRandom (req, res) {
    try {
      let index = parseInt(req.params.index)

      // Validate for invalid indexes
      if (index < 0) 
        throw "Invalid index"

      let session = await SessionModel.findById(req.params.id)
      let song = await SongModel.findOne().skip(session.index_array[index])

      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to fetch random song'
      })
      console.log(err)
    }
  }
}
