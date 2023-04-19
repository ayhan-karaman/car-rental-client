import axios from "axios";
import { interceptor } from "./interceptor";

interceptor()

export const userLogin = async(user)=>
{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Auth/signin`, user);
    return data;
}

export const userRegister = async(user)=>
{
    
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Auth/signup`, user);
    return data;
}