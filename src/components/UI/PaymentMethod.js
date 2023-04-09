import React from 'react'
import masterCard from '../../assets/images/masterCard.png'
import paypal from '../../assets/images/paypal.png';
import visa from '../../assets/images/visa.png'
import cheque from '../../assets/images/cheque.png';
import '../../styles/PaymentMethod.css'


function PaymentMethod() {
  return <>
        <div className="payment">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input type="radio" /> Direct Bank Transfer
            </label>
        </div>
        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input type="radio" /> Cheque Payment
            </label>
            <img src={cheque} alt=""/>
        </div>
        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input type="radio" /> Master Card
            </label>
            <div >
            <img src={masterCard} alt="" className='mx-1'/>
            <img src={visa} alt="" className='mx-1'/>
            </div>
        </div>
       
        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className='d-flex align-items-center gap-2'>
                <input type="radio" /> Paypal
            </label>
            <img src={paypal} alt="" />
        </div>
        <div className='payment text-end mt-5'>
            <button >Reverse Now</button>
        </div>
  </>
  
}

export default PaymentMethod