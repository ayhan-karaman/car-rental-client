import axios from "axios";

export const getAllBrands = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Brands/all-brands`);
    return data;
 }