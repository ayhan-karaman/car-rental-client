import React, { useState } from 'react'
import {  dateFormat, totalRentDayResult } from '../../tool';
import { toast } from 'react-toastify';
import { Badge, Button, Table } from 'reactstrap';
import Swal from 'sweetalert2'
import { updateRental } from '../../services/rentalService';
import { customConfirm } from '../SweetAlert2/CustomConfirm';




function UserRentalList({rentals, customerId}) {
 
  const delivery = (id) => {
     //() => toast.success("Teslim edildi " + item.modelName +' ' +dateFormat(new Date()).date)
     const rental = rentals.data.data.find(x => x.rentalId === id)
      const editRental ={
        id: rental.rentalId,
        customerId: customerId,
        modelId: rental.modelId,
        totalRentDay: rental.totalRentDay,
        rentStartDate: rental.rentStartDate,
        rentEndDate: rental.rentEndDate,
        returnDate: new Date().toISOString()
      }
       
         const confirmParamerters = {
            title:'Aracınızı Teslim Etmek İstiyormusunuz?',
            text : "Bu işlem ile para iadesi yapılmamaktadır!",
            operationType:'Delivery',
            operationFunc:async () =>  await updateRental(editRental)
         }
          customConfirm(confirmParamerters)
  } 
  
  const returnBtnFunc = (returnDate, func) => {
            
            return returnDate === null ?  <Button className='w-100' style={{background:'#008080', color:'#fff'}} onClick={func}>
                        Teslim Et
            </Button> : <h5>
                    <Badge className='w-100 py-2' color='info' >
                            {dateFormat(returnDate).date}
                    </Badge>
            </h5>
  }
  

  const dateDifferenceResult = (date) => {
     const newDate = new Date().toISOString();
     const difference = totalRentDayResult(date.substring(0, date.indexOf('T')), newDate.substring(0, newDate.indexOf('T')))

     return <h5>
            <Badge className='w-100 py-2' color={difference <= 0 ? 'danger' : difference <= 1 ? 'warning' : 'primary'}>
                {`${difference <= 0 ? '0 Days Left' : difference + ' Days Left'} `}
        </Badge>
     </h5>
  }

  return  <Table borderless >
            <thead>
                <tr>
                <th>Image</th>
                <th>Model Name</th>
                <th>Daily Price</th>
                <th>Rent Start Date</th>
                <th>Rent End Date</th>
                <th>Remaining Day</th>
                <th>Total Price</th>
                <th>Delivery State</th>
                </tr>
            </thead>
            <tbody>
                {
                    rentals.data && 
                    rentals.data.data.map((item, index) => {
                        return <tr key={index}>
                            
                            <td><img src={`${process.env.REACT_APP_BASE_ENDPOINT}`+item.imageUrl} width={50} height={50}  className=' rounded-circle' alt="" /></td>
                            <td>{item.modelName}</td>
                            <td>{item.dailyPrice}</td>
                            <td>{dateFormat(item.rentStartDate).date }/{dateFormat(item.rentStartDate).time}</td>
                            <td>{dateFormat(item.rentEndDate).date }/{dateFormat(item.rentEndDate).time}</td>
                            <td> {dateDifferenceResult(item.rentEndDate)} </td>
                            <td>{item.totalPrice.toFixed(2)} </td>
                            <td> 
                              {returnBtnFunc(item.returnDate, ()=>(delivery(item.rentalId)))}
                            </td>
                        </tr> 
                    })
                }
            </tbody>
            </Table>
}

export default UserRentalList