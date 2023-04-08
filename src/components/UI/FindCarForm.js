import React from 'react'
import '../../styles/FindCarForm.css';
import { Form, FormGroup } from 'reactstrap';
function FindCarForm() {
  return <Form  className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
             <FormGroup className='form_group'>
                <input type="text" placeholder='From address' />
             </FormGroup>
             <FormGroup className='form_group'>
                <input type="text" placeholder='To address' />
             </FormGroup>
             <FormGroup className='form_group'>
                <input className='journey_date' type="date" placeholder='Journey date' />
             </FormGroup>
             <FormGroup className='form_group'>
                <input className='journey_time' type="time" placeholder='Journey time' />
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