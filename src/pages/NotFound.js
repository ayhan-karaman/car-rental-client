import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import errorImage from '../assets/images/404-error.png'
import { Link } from 'react-router-dom'
import '../styles/Error.css'

function NotFound() {
  return <Helmet title="404-Not Found">
          <section>
              <Container>
                    <Row>
                        <Col className='text-center not_found_content' lg='12' md='12'>
                              <h2 className='text-danger mb-4' >!Ooops</h2>
                               <p className="section_description mb-4">
                                    <img src={errorImage} alt=""  className='w-25' />
                               </p>
                              <p className="section_description not-found-message">
                                   Your page not found 
                              </p>

                              <Link to='/' className='d-flex justify-content-center gap-3'>
                                <i class="ri-arrow-left-circle-fill"></i> <span> Back Home Page</span>
                              </Link>
                              
                             
                        </Col>
                    </Row>
              </Container>
          </section>
  </Helmet>
}

export default NotFound