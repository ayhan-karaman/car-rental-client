import axios from 'axios';

axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    const {origin} = new URL(config.url);
    const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
    const token = localStorage.getItem('access-token');
    if(allowedOrigins.includes(origin))
    {
        config.headers.authorization = token;
    }
    return config;
},

 function (error) {
    // Do something with request error
    return Promise.reject(error)
 });

 export const getAllCars = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/all-models`);
    return data;
 }

 export const getByIdCar = async(car_id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/get-by-id-model?id=${car_id}`);
    return data;
 }