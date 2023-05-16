import React from 'react'
import { Col, Container, Row, Table } from 'reactstrap';
import {useAuth} from '../contexts/AuthContext';
import {useQuery} from 'react-query';
import { getByCustomerIdRentals } from '../services/rentalService';
import { dateFormat, totalRentDayResult } from '../tool';
import { toast } from 'react-toastify';
function UserProfile() {
  const {user} = useAuth()
 
  const rentals = useQuery("rentals", ()=>(getByCustomerIdRentals(user.data.userId)))
  console.log(rentals)
  return <section>
         <Container className='py-5 h-100'>
                <Row className='d-flex justify-content-center align-items-center h-100'>
                     <Col lg='8' className='mb-4 mb-lg-0'>
                       <div className="card mb-3 rounded-1">
                              <Row className='g-0'>
                                <Col md='4' className='user_profile_gradient text-center text-white'>
                                    <img src={`${process.env.REACT_APP_BASE_ENDPOINT}` + user.data.imageUrl} alt="" className='my-5 img-fluid rounded-circle' width={80}/>
                                    <h5>{user.data.firstName } {user.data.lastName}</h5>
                                    <p className='section_description'>Customer</p>
                                    
                                </Col>
                                <Col md='8'>
                                      <div className="card-body p-4">
                                          <h6>Information</h6>
                                          <hr className="mt-0 mb-4" />
                                          <Row className='pt-1'>
                                              <Col lg='6' className='mb-3'>
                                                  <h6>Email</h6>
                                                  <p className="section_description text-muted">{user.data.email}</p>
                                              </Col>
                                              <Col lg='6' className='mb-3'>
                                                <h6>User Name</h6>
                                                <p className="section_description text-muted">{user.data.userName}</p>
                                              </Col>
                                          </Row>
                                      </div>
                                </Col>
                              </Row>

                       </div>
                     </Col>
                </Row>
                <Row className='mt-4'>
                 <h3 className='text-center fw-bold'>Kiraladığım Araçlar</h3>
                <Table className='mt-3 table-hover'>
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
                                     <td>{totalRentDayResult(item.rentEndDate, new Date())-1 <= 0 ? '0' : totalRentDayResult(item.rentEndDate, new Date())-1} </td>
                                     <td>{item.totalPrice.toFixed(2)} </td>
                                     <td> 
                                       <button onClick={() => toast.success("Teslim edildi " + item.modelName +' ' +dateFormat(new Date()).date)} className='btn btn_delivery' style={{background:'#008080', color:'#fff'}}>
                                          {item.returnDate === null ? 'Teslim Et' : dateFormat(item.returnDate).date + '/' + dateFormat(item.rentEndDate).time}
                                       </button>
                                     </td>
                               </tr> 
                            })
                         }
                    </tbody>
                </Table>
                </Row>
         </Container>
  </section>
}

export default UserProfile