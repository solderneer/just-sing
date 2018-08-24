import SongController from './controllers/SongController'
import SessionController from './controllers/SessionController'

export default function (app) {
    app.post('/song', SongController.register)
    app.get('/song/:songId', SongController.findById)
    app.get('/random/:id/:index', SongController.getRandom)
    app.get('/session/register/:seed', SessionController.register)
}