import Api from './Api'

export default {
    async getSong(seed, page, index) {
        let iter = 8 * (parseInt(page) - 1) + parseInt(index) // Calculating iterations required for PRNG (8 songs per page)
        return Api().get('random/' + seed + '/' + iter)
    }
}