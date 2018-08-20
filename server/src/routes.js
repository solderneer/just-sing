import {register} from './controllers/SongController'

export default function (app) {
    app.post('/song', register)
}