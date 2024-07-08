import axios from 'axios'

const baseurl = 'https://social-media-apalah.vercel.app/'

export const baseAxios = axios.create({
    baseURL: baseurl
})

export const Axios = axios.create({
    baseURL: baseurl,
    headers: {
        "Content-Type": "application/json"
    }
})

export const axiosData = axios.create({
    baseURL: baseurl,
    headers: {
        "Content-Type": "multipart/form-data"
    }
})
