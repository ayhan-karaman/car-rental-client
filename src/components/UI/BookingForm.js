import React, { useEffect, useState } from 'react'
import { Form, FormGroup } from 'reactstrap'
import '../../styles/BookingForm.css'
import { useAuth } from '../../contexts/AuthContext'
import { initialDate, totalRentDayResult } from '../../tool';
import { useFormik } from 'formik';

function BookingForm({setBookingForm, dailyPrice}) {
    const {user} = useAuth();
    const [hidden, setHidden] = useState(false)
    const [totalRent, setTotalRent] = useState(0);
    const formik = useFormik({
        initialValues:{
            firstName:user.data.firstName, 
            lastName:user.data.lastName, 
            email:user.data.email,
            rentStartDate:initialDate(1),
            rentEndDate:initialDate(2),
            
        },
        onSubmit:() => {
              setBookingForm({...formik.values})
        }
    })


    useEffect(() => {
        
        setBookingForm({...formik.values})
       
    }, [formik.values, setBookingForm])
    
    const totalRentDay = (e) => {
        const start = e.target.name === "rentStartDate" ? e.target.value : formik.values.rentStartDate;
        const end = e.target.name === "rentEndDate" ? e.target.value : formik.values.rentEndDate;
        const res =  totalRentDayResult(end, start) * dailyPrice;
        setTotalRent(res)
        setHidden(true);
    }


    

  return <Form onSubmit={formik.handleSubmit}>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="text" 
            placeholder='First Name' 
            onChange={formik.handleChange} 
            defaultValue={formik.values.firstName} 
            name="firstName" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="text" 
            placeholder='Last Name'
            onChange={formik.handleChange} 
            defaultValue={formik.values.lastName} 
            name="lastName" id="" />
        </FormGroup>

        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="email" 
            defaultValue={formik.values.email} 
            onChange={formik.handleChange}
            placeholder='Email' name="email" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input 
            type="datetime-local" 
            onChange={formik.handleChange}
            onChangeCapture={totalRentDay}
            onBlur={totalRentDay}
            min={initialDate(1)} 
            defaultValue={formik.values.rentStartDate} 
            placeholder='Rent Start Date Time' 
            name="rentStartDate" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="datetime-local" 
            min={initialDate(2)} 
            onChange={formik.handleChange}
            onChangeCapture={totalRentDay}
            onBlur={totalRentDay}
            defaultValue={formik.values.rentEndDate} 
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


