import axios from "axios";

export const getAllColors = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Colors/all-colors`);
    return data;
 }

