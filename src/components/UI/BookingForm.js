import React, { useEffect, useState } from 'react'
import { Form, FormGroup } from 'reactstrap'
import '../../styles/BookingForm.css'
import { useAuth } from '../../contexts/AuthContext'
import { initialDate, totalRentDayResult } from '../../tool';

function BookingForm({bookingForm, setBookingForm, dailyPrice}) {
    const {user} = useAuth();
    const [hidden, setHidden] = useState(false)
    const [totalRent, setTotalRent] = useState(0);
    
    useEffect(() => {
         setBookingForm({
            firstName:user.data.firstName, 
            lastName:user.data.lastName, 
            email:user.data.email,
            rentStartDate:initialDate(1),
            rentEndDate:initialDate(2)
         })
    }, [])
    
    const totalRentDay = (e) => {
        const start = e.target.name === "rentStartDate" ? e.target.value : bookingForm.rentStartDate;
        const end = e.target.name === "rentEndDate" ? e.target.value : bookingForm.rentEndDate;
        const res =  totalRentDayResult(end, start) * dailyPrice;
        setTotalRent(res)
        setHidden(true);
    }

    const onChangeValue = (e) =>{
        setBookingForm({...bookingForm, [e.target.name]: e.target.value})
    }
    

  return <Form >
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="text" 
            placeholder='First Name' 
            onChange={onChangeValue} 
            defaultValue={bookingForm.firstName} 
            name="firstName" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="text" 
            placeholder='Last Name'
            onChange={onChangeValue} 
            defaultValue={bookingForm.lastName} 
            name="lastName" id="" />
        </FormGroup>

        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="email" 
            defaultValue={bookingForm.email} 
            onChange={onChangeValue}
            placeholder='Email' name="email" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input 
            type="datetime-local" 
            onChange={onChangeValue}
            onChangeCapture={totalRentDay}
            min={initialDate(1)} 
            defaultValue={bookingForm.rentStartDate} 
            placeholder='Rent Start Date Time' 
            name="rentStartDate" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="datetime-local" 
            min={initialDate(2)} 
            onChange={onChangeValue}
            onChangeCapture={totalRentDay}
            defaultValue={bookingForm.rentEndDate} 
            placeholder='Rent End Date Time' 
            className='date' name="rentEndDate" 
            id="" />
        </FormGroup>

       

        <FormGroup>
            <textarea type="textarea" className='textarea   ' placeholder='Write' rows={5}></textarea>
        </FormGroup>
        <div className={`d-flex justify-content-between px-4 pt-2 border-top ${hidden ? "visible" : "visually-hidden-focusable"}`}>
               <div className="section_title">Total:</div>
              <div className="section_subtitle">₺ {totalRent.toFixed(2)}</div>
        </div>
  </Form>
}

export default BookingForm

/*<FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="text" placeholder='Phone Number' name="" id="" />
        </FormGroup>

        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="text" placeholder='From Address' name="from_address" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="text" placeholder='To Address' name="to_address" id="" />
        </FormGroup>

        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
             <select>
                 <option value="1 person">1 Person</option>
                 <option value="2 person">2 Person</option>
                 <option value="3 person">3 Person</option>
                 <option value="4 person">4 Person</option>
                 <option value="5+ person">5+ Person</option>
             </select>
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
             <select>
                 <option value="1 luggage">1 Luggage</option>
                 <option value="2 luggage">2 Luggage</option>
                 <option value="3 luggage">3 Luggage</option>
                 <option value="4 luggage">4 Luggage</option>
                 <option value="5+ luggage">5+ Luggage</option>
             </select>
        </FormGroup> */