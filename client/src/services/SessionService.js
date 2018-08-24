import Api from './Api'

export default {
    async register(seed) {
        return Api().get('/session/register/' + seed)
    }
}