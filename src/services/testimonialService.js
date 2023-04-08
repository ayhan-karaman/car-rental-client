import axios from "axios";

export const getAllTestimonials = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Testimonials/get-all`);
    return data;
 }