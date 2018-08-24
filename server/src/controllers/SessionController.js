import SessionModel from '../models/SessionModel'
import SongModel from '../models/SongModel'
import ShuffleSeed from 'shuffle-seed'

let indexArray = []

async function getArray () {
  if (indexArray.length == 0) {
      const count = await SongModel.estimatedDocumentCount()
      for(let i = 1; i <= count; i++) {
          indexArray.push(i)
      }
      console.log(indexArray)
  }

  return indexArray
}

export default {
  async register (req, res) {
    let initArray = await getArray()

    let randArray = ShuffleSeed.shuffle(initArray, req.params.seed)
    let session = new SessionModel({
      index_array: randArray
    })

    try {
      const response = await session.save()
      res.send(session._id)
    } catch (err) {
      res.status(400).send({
        error: 'Unable to create session' + err
      })
    }
  }
}
