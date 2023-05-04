import React, {  useState } from 'react'
import masterCard from '../../assets/images/masterCard.png'
import visa from '../../assets/images/visa.png'
import crediCard from '../../assets/images/card.png';
import '../../styles/PaymentMethod.css'
import { Col, Form, Input, FormFeedback, Row } from "reactstrap";
import {Link} from "react-router-dom"
import { useQuery } from 'react-query';
import { toast } from 'react-toastify'
import { getByCustomerIdCreditCards } from '../../services/creditCardService';


function PaymentMethod({handlerOnSubmit, customer}) {
    const initialValue = {cardNumber:'', expDate:'', cardHolderName:'', customerId:'', cvv:''};
    const [value, setValue] = useState("");
    const [selectedCard, setSelectedCard] = useState(false);
    const [cardForm, setCardForm] = useState(initialValue)


    const creditCards = useQuery('creditCards', () =>(getByCustomerIdCreditCards(customer.data.userId)))
    
    const onClickSelectCard = (e) => {
            
           if(e.target.tagName === 'INPUT')
           {
                 
                 refreshFormInput(e.target.parentElement.parentElement.parentElement.lastChild);
                 const card = creditCards.data.data.find(x  => x.cardNumber === e.target.value) ;
                 setCardForm({
                       cardNumber:card.cardNumber, 
                       expDate:card.expDate, 
                       cardHolderName:card.cardHolderName,
                       cvv:''
                 })
                 setSelectedCard(true)
                 return setValue(e.target.value); 
           }
    }

   const onChangeCardInfo = (e) =>{
    
            setCardForm({...cardForm, [e.target.name]: e.target.value})
   }
   
   const refreshFormInput = (event) => 
   {
            
            setValue("");
            event.reset()
            setCardForm({...initialValue});
            setSelectedCard(false);

   }
  

    const onSubmitChange = (e)=>{
            e.preventDefault()
            if(selectedCard)
            {
                
                e.target.reset()
                setCardForm({...initialValue})
                setValue("");
               return toast.success("kayıtlı kart ile ödeme yapıldı")
            }
            e.target.reset()
                setCardForm({...initialValue})
                setValue("");
            return toast.success("yeni kart ile ödeme yapıldı")
            
    }
    
    
  
    if(creditCards.isLoading) return;
   
  return <Col className='p-0'>
          {
              creditCards.data.data.map(item => {
               return  <Row onClick={(e) => { onClickSelectCard(e); }}  key={item.id} className={`row-content ${value === item.cardNumber ? "select_card" : ""} d-flex justify-content-between align-items-center`}>
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
        <Form onSubmit={onSubmitChange} >
        {/* card holder name */}
         <Row className='row-content p-2 d-flex justify-content-between mt-2'>
              <Col className='input-title'>Card holder name</Col>
              <Col lg='12'>
                <Input defaultValue={cardForm.cardHolderName}  onChange={onChangeCardInfo} name="cardHolderName" onFocus={(e) => refreshFormInput(e.target.parentElement.parentElement.parentElement)}  type='text' />
              </Col>
         </Row>

         {/* card number, exp. date, cvv input */}
         
         <Row className='d-flex justify-content-between mt-3'>
            <Col lg='7' md='7'>
                <Row className='row-content'>
                    <Col className='input-title'>Card number</Col>
                    <Col lg='12'>
                        <Input  defaultValue={cardForm.cardNumber}  onChange={onChangeCardInfo} name='cardNumber' type='text' />
                    </Col>
                </Row>
            </Col>
             <Col lg='3' md='3'>
             <Row className='row-content'>
                    <Col  className='input-title text-center'>Exp. date</Col>
                    <Col lg='12'>
                        <Input defaultValue={cardForm.expDate} onChange={onChangeCardInfo} name='expDate' type='text' />
                    </Col>
                </Row>
             </Col>
             <Col lg='2' md='2'>
             <Row className='row-content'>
                    <Col className='input-title text-center'>CVV</Col>
                    <Col lg='12'>
                        <Input  id='cvv'  defaultValue={cardForm.cvv} onChange={onChangeCardInfo} name='cvv' type='text' />
                       
                    </Col>
                    
                </Row>
               
             </Col>
         </Row>
          <button  className='btn pay_btn' >Pay Now  💵</button>
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

