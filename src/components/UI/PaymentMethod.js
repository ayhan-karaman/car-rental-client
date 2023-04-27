import React, {  useEffect, useState } from 'react'
import masterCard from '../../assets/images/masterCard.png'
import paypal from '../../assets/images/paypal.png';
import visa from '../../assets/images/visa.png'
import cheque from '../../assets/images/cheque.png';
import '../../styles/PaymentMethod.css'
import { Col, Row } from "reactstrap";
import {Link} from "react-router-dom"


function PaymentMethod({handlerOnSubmit}) {
    const [value, setValue] = useState({selectedOption:""});
    const onValueChange = (e) => {
           setValue({selectedOption:e.target.value})   
    }
    
   
  return <Col className='p-0'>
         <Row className='row-content d-flex justify-content-between align-items-center'>
              <Col lg='2'  md='2' sm='2'>
                  <img src={visa} alt="" />
              </Col>
              <Col lg='7' md='7' sm='7'>
                  <input className='text-end' type='text' disabled placeholder='5544 **** **** **89' />
              </Col>
              <Col lg='3' md='3' sm='3'>
                  <Link to={"#"}>Removed</Link>
              </Col>
         </Row>
         <Row className='row-content d-flex justify-content-between align-items-center'>
              <Col lg='2' md='2' sm='2'>
                  <img src={masterCard} alt="" />
              </Col>
              <Col lg='7' md='7' sm='7'>
                  <input className='text-end' type='text' disabled placeholder='5544 **** **** **89' />
              </Col>
              <Col lg='3' md='3' sm='3'>
                  <Link to={"#"}>Removed</Link>
              </Col>
         </Row>

           <div className='section_subtitle mt-3'>New Card:</div>
          
        {/* card holder name */}
         <Row className='row-content p-2 d-flex justify-content-between mt-2'>
              <Col className='input-title'>Card holder name</Col>
              <Col lg='12'>
                <input type='text' />
              </Col>
         </Row>

         {/* card number, exp. date, cvv input */}
         <Row className='d-flex justify-content-between mt-3'>
            <Col lg='7'>
                <Row className='row-content'>
                    <Col className='input-title'>Card number</Col>
                    <Col lg='12'>
                        <input type='text' />
                    </Col>
                </Row>
            </Col>
             <Col lg='3'>
             <Row className='row-content'>
                    <Col className='input-title text-center'>Exp. date</Col>
                    <Col lg='12'>
                        <input type='text' />
                    </Col>
                </Row>
             </Col>
             <Col lg='2'>
             <Row className='row-content'>
                    <Col className='input-title text-center'>CVV</Col>
                    <Col lg='12'>
                        <input type='text' />
                    </Col>
                </Row>
             </Col>
         </Row>
          <Link onClick={handlerOnSubmit} className='btn pay_btn'  to={"#"}>Pay Now  💵</Link>
  </Col>
  
}

export default PaymentMethod

/* 
<>
        <div className="payment">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input  onChange={onValueChange} checked={value.selectedOption === "Bank-Transfer"} value={"Bank-Transfer"} type="radio" /> Direct Bank Transfer
            </label>
        </div>
        <div  hidden={value.selectedOption !== "Bank-Transfer"}>
                Ba bilgileri
        </div>
        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input onChange={onValueChange} checked={value.selectedOption === "Cheque-Payment"} value={"Cheque-Payment"}  type="radio" /> Cheque Payment
            </label>
            <img src={cheque} alt=""/>
        </div>
        <div  hidden={value.selectedOption !== "Cheque-Payment"}>
                Cek bilgileri
        </div>
        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input onChange={onValueChange} checked={value.selectedOption === "Master-Card"} value={"Master-Card"}  type="radio" /> Master Card
            </label>
            <div >
            <img src={masterCard} alt="" className='mx-1'/>
            <img src={visa} alt="" className='mx-1'/>
            </div>
            
        </div>
        <div  hidden={value.selectedOption !== "Master-Card"}>
                Kart bilgileri
        </div>
        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input id='ss' onChange={onValueChange} checked={value.selectedOption === "Paypal"}  value={"Paypal"} type="radio" /> Paypal
            </label>
            <img src={paypal} alt="" />
        </div>
        <div  hidden={value.selectedOption !== "Paypal"}>
                Paypal bilgileri
        </div>
        <div className='payment text-end mt-5'>
            <button onClick={handlerOnSubmit} >Reserve Now</button>
        </div>
  </>

*/