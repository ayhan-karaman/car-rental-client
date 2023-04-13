import React from 'react'
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { socialLinks } from '../tool'
import { Link } from 'react-router-dom'
import '../styles/Contact.css'

function Contact() {
  return <Helmet title='Contact'>
        <CommonSection title="Contact" />
        <section>
              <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className='fw-bold mb-4'>Get In Touch</h6>
                        <Form>
                            <FormGroup className='contact_form'>
                                <Input placeholder='Your Name' type='text'/>
                            </FormGroup>
                            <FormGroup className='contact_form'>
                                <Input placeholder='Email' type='email'/>
                            </FormGroup>
                            <FormGroup className='contact_form'>
                               <textarea placeholder='Message' className='textarea' rows="5"></textarea>
                            </FormGroup>

                            <button className='btn contact_btn' type='submit'>Send</button>
                        </Form>
                    </Col>
                    <Col lg='5' md='5'>
                            <div className="contact_info">
                                <h6 className="fw-bold mb-0">Contact Information</h6>
                                <p className="section_description mb-0">
                                Taksim, Istanbul, Turkey
                                </p>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='mb-0 fs-6'>Phone: </h6>
                                    <p className="section_description mb-0">+90 850 212 12 12</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <h6 className='mb-0 fs-6'>Email: </h6>
                                    <p className="section_description mb-0"> info@krmn.com.tr</p>
                                </div>
                                <h6 className="fw-bold mt-4">Follow Us</h6>
                                <div className="d-flex align-items-center gap-4 mt-3">
                                    {
                                         socialLinks.map((item, index) => {
                                            return <Link to={item.url} className='social_link_icons' key={index}> <i  className={item.icon}></i> </Link>
                                         })
                                    }
                                </div>
                            </div>
                    </Col>
                </Row>
              </Container>
        </section>
  </Helmet>
}

export default Contact