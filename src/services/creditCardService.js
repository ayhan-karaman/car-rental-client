import axios from "axios";

export const getByCustomerIdCreditCards = async(customerId) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/CreditCards/get-by-customer-id?customerId=${customerId}`);
   
    return data;
 }