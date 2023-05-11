import axios from 'axios';


 export const getAllCars = async() => {
   
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/all-models`);
    return data;
 }

 export const getByBrandNameAndColorNameCars = async(search) => {
   
   const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/get-by-brand-and-color-name-colors${search}`);
   return data;
}

export const getByBrandNameCars = async(search) => {
   
   const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/get-by-brand-name${search}`);
   return data;
}
export const getByColorNameCars = async(search) => {
   
   const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/get-by-color-name${search}`);
   return data;
}
 export const getByIdCar = async(car_id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Models/get-by-id-model?id=${car_id}`);
    return data;
 }