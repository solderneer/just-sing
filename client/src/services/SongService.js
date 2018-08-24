import Api from './Api'

export default {
    async getSong(id, page, index) {
        let iter = 8 * (parseInt(page) - 1) + parseInt(index) // Calculating iterations required for PRNG (8 songs per page)
        return Api().get('random/' + id + '/' + iter)
    }
}