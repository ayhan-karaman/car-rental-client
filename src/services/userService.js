import axios from "axios";


export const getByEmailUser = async(emailOrUserName) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Users/get-user?email_or_username=${emailOrUserName}`);
    return data;
 }


 export const updateUserProfile = async(userProfile) => {
   
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Users/update-user`, userProfile);
    return data;
 }

 export const updateUserPasword = async(passwordInfo) => {
  
   const {data} = await axios.post(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Users/update-password`, passwordInfo);
   return data;
}