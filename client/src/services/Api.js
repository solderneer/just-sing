import axios from 'axios'

export default function () {
    return axios.create({
        baseURL: 'http://localhost:8081/',
        timeout: 1000
    })
}