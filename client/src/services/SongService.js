import Api from './Api'

export default {
    async getSong() {
        return Api().get('random')
    }
}