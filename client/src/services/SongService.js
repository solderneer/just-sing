import axios from 'axios'

export default {
    async getUser() {
      try {
        let response = await axios.get('http://localhost:8081/random')
        return response.data
      } catch (error) {
        return -1
      }
    }
}