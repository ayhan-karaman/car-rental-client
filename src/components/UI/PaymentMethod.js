import React, { useState } from 'react'
import masterCard from '../../assets/images/masterCard.png'
import visa from '../../assets/images/visa.png'
import crediCard from '../../assets/images/card.png';
import '../../styles/PaymentMethod.css'
import { Col, Form, Input,  Row } from "reactstrap";
import {Link} from "react-router-dom"
import { useQuery } from 'react-query';
import { toast } from 'react-toastify'
import { getByCustomerIdCreditCards, newCreditCard } from '../../services/creditCardService';
import { useFormik } from 'formik';

import validationSchema from '../../validations/paymentValidation';
import { expriyFormat } from '../../tool';



function PaymentMethod({handlerOnSubmit, customer}) {

    const [value, setValue] = useState("");
    const [selectedCard, setSelectedCard] = useState(false);
    const creditCards = useQuery('creditCards', () =>(getByCustomerIdCreditCards(customer.data.userId)))
    const initialValue = {cardNumber:'', expDate:'', cardHolderName:'', customerId:'', cvv:''};

     // Use formik initial function     
    const formik = useFormik({
         initialValues:initialValue,
         onSubmit:async () =>{
            if(selectedCard)
            {
                formik.resetForm()
                formik.initialValues = initialValue
                setValue("");
                handlerOnSubmit()
                return;
            }
          
            
            if(window.confirm("Kartı kayıt etmek istermisiniz"))
            {
                        try {
                            const response = await newCreditCard({
                                customerId:customer.data.userId,
                                cardHolderName:formik.values.cardHolderName,
                                cardNumber:formik.values.cardNumber,
                                expDate:formik.values.expDate,

                            })
                            toast.success(response.message)
                            handlerOnSubmit();
                            formik.resetForm()
                        } catch (error) {
                            toast.error(error.response.data.message)
                            formik.resetForm()
                        }
            }else{
                setValue("");
                handlerOnSubmit()
                toast.info("Tercihiniz üzerine kartınızın kaydı oluşturulmadı.", {
                     autoClose:3000
                })
                formik.resetForm()
                return;
            }
            
         },  
         onReset:() =>{
            setValue("");
            setSelectedCard(false);
         },
         validationSchema
        
         
    })
    
  

    // Selected Card Function
    const onClickSelectCard = (e) => {
            
           if(e.target.tagName === 'INPUT')
           {
                   
                formik.resetForm()
                const card = creditCards.data.data.find(x  => x.cardNumber === e.target.value) ;
                formik.setValues ({
                    cardNumber:card.cardNumber.replaceAll(' ', ''), 
                    expDate:card.expDate, 
                    cardHolderName:card.cardHolderName,
                    cvv:''
                })
                setSelectedCard(true)
                return setValue(e.target.value); 
           }
    }

  
 






    if(creditCards.isLoading) return;
   
  return <Col className='p-0'>
          {
              creditCards.data.data.map(item => {
               return  <Row onClick={(e) => { onClickSelectCard(e); }}  key={item.id} className={`row-content-payment ${value === item.cardNumber ? "select_card" : ""} d-flex justify-content-between align-items-center`}>
                    <Col lg='2'  md='2' sm='2'>
                        <img src={item.cardNumber[0] === "5" ? masterCard : item.cardNumber[0] === "4" ? visa :crediCard } alt="" />
                    </Col>
                    <Col   lg='7' md='7' sm='7'>
                        <input   className='text-end' defaultValue={item.cardNumber}  type='text' disabled />
                    </Col>
                    <Col lg='3' md='3' sm='3'>
                        <Link to={"#"}>Removed</Link>
                    </Col>
                </Row>
              })
          }
        

           <div className='section_subtitle mt-3'>New Card:</div>
        <Form onSubmit={formik.handleSubmit} >
        {/* card holder name */}
         <Row className='row-content-payment p-2 d-flex justify-content-between mt-2'>
              <Col className='input-title'>Card holder name</Col>
              <Col style={{zIndex:"999 !important"}} lg='12' >
                <Input 
                value={formik.values.cardHolderName}  
                placeholder='Name Surname'
                onChange={formik.handleChange} name="cardHolderName" 
                onFocus={formik.resetForm}  
                type='text' 
                onBlur={formik.handleBlur}
                invalid={
                    !!formik.errors.cardHolderName &&
                    (!!formik.touched.cardHolderName || !!formik.dirty.cardHolderName)
                  }
                  valid={
                    !formik.errors.cardHolderName &&
                    (!!formik.touched.cardHolderName || !!formik.dirty.cardHolderName)
                  }
                />
                 
              </Col>
         </Row>

         {/* card number, exp. date, cvv input */}
         
         <Row className='d-flex justify-content-between mt-3'>
            <Col lg='6' md='6'>
                <Row className='row-content-payment'>
                    <Col className='input-title'>Card number</Col>
                    <Col lg='12'>
                        <Input  
                        value={formik.values.cardNumber}  
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        invalid={
                            !!formik.errors.cardNumber &&
                            (!!formik.touched.cardNumber || !!formik.dirty.cardNumber)
                          }
                          valid={
                            !formik.errors.cardNumber &&
                            (!!formik.touched.cardNumber || !!formik.dirty.cardNumber)
                          }        
                        name='cardNumber' 
                        type='text' 
                        placeholder='0000 0000 0000 0000'
                        />
                     
                    </Col>
                </Row>
            </Col>
             <Col lg='3' md='3'>
             <Row className='row-content-payment'>
                    <Col  className='input-title text-center'>Exp. date</Col>
                    <Col lg='12'>
                        <Input 
                        value={expriyFormat(formik.values.expDate)} 
                        onChange={formik.handleChange}
                        max={5}
                        placeholder='MM/YY'
                        name='expDate' 
                        type='text'
                        onBlur={formik.handleBlur}
                        
                        invalid={
                            !!formik.errors.expDate &&
                            (!!formik.touched.expDate || !!formik.dirty.expDate)
                          }
                        //   valid={
                        //     !formik.errors.expDate &&
                        //     (!!formik.touched.expDate || !!formik.dirty.expDate)
                        //   }  
                        />
                     
                    </Col>
                </Row>
             </Col>
             <Col lg='3' md='3'>
             <Row className='row-content-payment'>
                    <Col className='input-title text-center'>CVV</Col>
                    <Col lg='12'>
                        <Input  
                        id='cvv'  
                        value={formik.values.cvv} 
                        onChange={formik.handleChange} 
                        name='cvv' 
                        placeholder='000'
                        min={3}
                        max={3}
                        type='text' 
                        onBlur={formik.handleBlur}
                        invalid={
                            !!formik.errors.cvv &&
                            (!!formik.touched.cvv || !!formik.dirty.cvv)
                          }
                        //   valid={
                        //     !formik.errors.cvv &&
                        //     (!!formik.touched.cvv || !!formik.dirty.cvv)
                        //   }  
                        />
                       
                    </Col>
                    
                </Row>
               
             </Col>
         </Row>
          <button type='submit' onSubmit={handlerOnSubmit} className='btn pay_btn' >Pay Now  💵</button>
     </Form>
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

