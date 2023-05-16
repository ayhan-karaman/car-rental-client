import axios from 'axios';


 export const newRental = async(rental) => {
   
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Rentals/new-rental`, rental);
    return data;
 }

 export const getByCustomerIdRentals = async(customerId) => {
   
   const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Rentals/get_by_customer_id_rentals?customerId=${customerId}`);
   return data;
}