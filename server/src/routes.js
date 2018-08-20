import SongController from './controllers/SongController'

export default function (app) {
    app.post('/song', SongController.register)
    app.get('/song/:songId', SongController.findById)
}