import SongItem from '../models/SongItem'

async function register (req, res) {
  let song = new SongItem(req.body)

  try {
    await song.save()
    res.send('Registered new song')
  } catch (err) {
    res.status(400).send({
      error: 'Unable to register new song'
    })
  }
}

export {register}