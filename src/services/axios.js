
import axios from 'axios'

// keep const export to force usage of consistent axios name accross project
export const $axios = axios.create({
    baseURL: ''
    // other axios settings
})