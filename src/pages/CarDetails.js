import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getByIdCar } from '../services/carService'
import { Container, Row, Col } from 'reactstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet';
import BookingForm from '../components/UI/BookingForm'
import PaymentMethod from '../components/UI/PaymentMethod'
import { useAuth } from '../contexts/AuthContext';
import { totalRentDayResult } from '../tool'

function CarDetails() {
  const { car_id } = useParams();
  const { loggedIn, user } = useAuth();
  const location = useLocation();
  
  const [bookingForm, setBookingForm] = useState({});
  
  
  useEffect(() => {

  }, [])

  const handlerOnSubmit = () => {
         
        const rentalInfo = {
              customerId:user?.data.userId,
              modelId:car_id,
              totalRentDay:totalRentDayResult(bookingForm.rentEndDate, bookingForm.rentStartDate) * data.data.dailyPrice,
              rentStartDate:bookingForm.rentStartDate,
              rentEndDate:bookingForm.rentEndDate

        }
        console.log(rentalInfo)
  }
  
  const {isLoading, data} = useQuery(["car", car_id], ()=>(getByIdCar(car_id)))
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])
 
  if(isLoading)  return <h1>Bir hata Oluştu</h1>

   
  
  return <Helmet title={data.data.brandName + " " + data.data.modelName}>
        <section>
            <Container>
                <Row>
                  <Col lg='6'>
                       <img className='w-100' src={`${process.env.REACT_APP_BASE_ENDPOINT}`+data.data.modelImageUrls[0]} alt={data.data.modelImageUrls[0]} />
                  </Col>
                  <Col lg='6'>
                      <div className="car_info">
                        <h2 className='section_title'>{data.data.brandName} {data.data.modelName}</h2>
                        <div className="d-flex align-items-center gap-5 mb-4 mt-3">
                           <h6 className="rent_price fw-bold fs-4">₺ {data.data.dailyPrice} / Day</h6>
                           <span className='d-flex align-items-center gap-2'>
                             <span style={{color:"#f9a826"}}>
                               <i className="ri-star-s-fill"></i>
                               <i className="ri-star-s-fill"></i>
                               <i className="ri-star-s-fill"></i>
                               <i className="ri-star-s-fill"></i>
                               <i className="ri-star-s-fill"></i>
                             </span>
                             (94% Ratings)
                           </span>
                        </div>
                        <p className="section_description">
                          {data.data.description}
                        </p>

                        <div className="d-flex align-items-center" style={{columnGap:'4rem'}}>
                          <span className='d-flex align-items-center gap-1 section_description'>
                            <i className="ri-roadster-line" style={{color:"#f9a826"}}></i> {data.data.modelYear}
                          </span>
                          <span className='d-flex align-items-center gap-1 section_description'>
                            <i className="ri-settings-line" style={{color:"#f9a826"}}></i> {data.data.gearType}
                          </span>
                          <span className='d-flex align-items-center gap-1 section_description'>
                          <i className="ri-gps-line" style={{color:"#f9a826"}}></i>{data.data.speed}
                          </span>
                        </div>

                        <div className="d-flex align-items-center" style={{columnGap:'2.8rem'}}>
                          <span className='d-flex align-items-center gap-1 section_description'>
                          <i className="ri-gps-line" style={{color:"#f9a826"}}></i>{data.data.isGps ? "GPS Navigation" : "Not GPS Navigation" }
                          </span>
                          <span className='d-flex align-items-center gap-1 section_description'>
                            <i className="ri-wheelchair-line" style={{color:"#f9a826"}}></i> {data.data.isBabySeat ? 'Baby Seat' : 'Not Baby Seat'}
                          </span>
                          <span className='d-flex align-items-center gap-1 section_description'>
                          <i className="ri-snowy-line" style={{color:"#f9a826"}}></i> {data.data.isAirConditioner ? 'AC' : 'Not AC'}
                          </span>
                        
                        </div>
                          
                      </div> 
                      {
                         !loggedIn && <div className="d-flex justify-content-end mt-5">
                                    <Link to='/auth/login' state={{preUrl:location.pathname}} style={{background:'#008080', color:'#fff'}} className='btn'>Login For Reserve Now</Link>
                                </div>
                      }                  
                  </Col>

                {
                    loggedIn && 
                    <>
                       <Col lg='7' className='mt-5'>
                          <div className="payment_method_info mt-5">
                              <h5 className='mb-4 fw-bold'>Booking Information</h5>
                              <BookingForm  bookingForm={bookingForm} dailyPrice={data.data.dailyPrice} setBookingForm={setBookingForm}/>
                          </div>
                        </Col>
                        <Col lg='5' className='mt-5'>
                          <div className="payment_info mt-5">
                              <h5 className='mb-4 fw-bold'>Payment Information</h5>
                              <PaymentMethod customer={user} handlerOnSubmit={handlerOnSubmit}/>
                          </div>
                        </Col>
                    </>
                }
                </Row>
            </Container>
        </section>
  </Helmet>
}

export default CarDetails