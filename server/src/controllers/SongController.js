import SongItem from '../models/SongItem'

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
      const count = await SongItem.estimatedDocumentCount()

      let random = Math.floor(Math.random() * count)
      let song = await SongItem.findOne().skip(random)

      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to fetch random song'
      })
    }
  }
}
