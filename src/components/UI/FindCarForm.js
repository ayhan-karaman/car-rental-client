import React, { useEffect, useState } from 'react'
import '../../styles/FindCarForm.css';
import { Form, FormGroup } from 'reactstrap';
import { initialDate } from '../../tool';
function FindCarForm() {
    const [dateTime, setDateTime] = useState({time:'', date:''})
   
    useEffect(()=>{
         setDateTime({
               date:initialDate(0).slice(0, 10),
               time:initialDate(0).slice(11, 16)
         })
    },[])

  return <Form  className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
             <FormGroup className='form_group'>
                <input type="text" placeholder='From address' />
             </FormGroup>
             <FormGroup className='form_group'>
                <input type="text" placeholder='To address' />
             </FormGroup>
             <FormGroup className='form_group'>
                <input className='journey_date' type="date" min={dateTime.date}  defaultValue={dateTime.date}   placeholder='Journey date' />
             </FormGroup>
             <FormGroup className='form_group'>
                <input className='journey_time'  defaultValue={dateTime.time} type="time" placeholder='Journey time' />
             </FormGroup>
             <FormGroup className='select_group'>
                <select >
                    <option value="ac">AC Car</option>
                    <option value="non-ac">Non AC Car</option>
                </select>
             </FormGroup>
             <FormGroup className='form_group'>
                <button className="btn find_car_btn">Find Car</button>
             </FormGroup>
        </div>
  </Form>
}

export default FindCarForm