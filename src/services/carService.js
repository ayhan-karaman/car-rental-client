import axios from 'axios';


 export const getAllCars = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/all-models`);
    return data;
 }

 export const getByIdCar = async(car_id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/get-by-id-model?id=${car_id}`);
    return data;
 }