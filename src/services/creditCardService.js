import axios from "axios";

export const getByCustomerIdCreditCards = async(customerId) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/CreditCards/get-by-customer-id?customerId=${customerId}`);
   
    return data;
 }

 export const newCreditCard = async(creditCard) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API_ENDPOINT}/CreditCards/new-card`, creditCard);
   
    return data;
 }