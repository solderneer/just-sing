import SongController from './controllers/SongController'

export default function (app) {
    app.post('/song', SongController.register)
    app.get('/song/:songId', SongController.findById)
    app.get('/random/:seed/:index', SongController.getRandom)
}