import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import {useAuth} from '../contexts/AuthContext'
function UserProfile() {
  const {user} = useAuth()
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
         </Container>
  </section>
}

export default UserProfile