import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/'
})

export default instance