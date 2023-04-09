import React from 'react'
import { Form, FormGroup } from 'reactstrap'
import '../../styles/BookingForm.css'
function BookingForm() {
    const submitHandler = (e) => {
         console.log("jfladflka")
         e.preventDefault();
    }
  return <Form onSubmit={submitHandler}>
        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="text" placeholder='First Name' name="firstName" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="text" placeholder='Last Name' name="lastName" id="" />
        </FormGroup>

        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="email" placeholder='Email' name="email" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
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
        </FormGroup>

        <FormGroup className='booking_form d-inline-block me-4 mb-4'>
            <input type="date" placeholder='Journey Date' name="date" id="" />
        </FormGroup>
        <FormGroup className='booking_form d-inline-block ms-1 mb-4'>
            <input type="time" placeholder='Journey Time' className='time_picker' name="time" id="" />
        </FormGroup>

        <FormGroup>
            <textarea type="textarea" className='textarea' placeholder='Write' rows={5}></textarea>
        </FormGroup>
  </Form>
}

export default BookingForm