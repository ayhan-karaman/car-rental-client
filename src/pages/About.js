import React from 'react'
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import AboutSeciton from '../components/UI/AboutSection';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import driveImg from '../assets/images/about_drive.jpg';
import { Container, Row, Col } from 'reactstrap';
import OurMembers from '../components/UI/OurMembers';
import '../styles/About.css'


function About() {
  return <Helmet title='About'>
          <CommonSection title="About"/>
          <AboutSeciton aboutClass='aboutPage'/>

          <section className="about_page_section">
             <Container>
                 <Row>
                  <Col lg='6' md='6' sm='12'>
                      <div className="about_page_img">
                        <img src={driveImg} alt="" className='w-100 rounded-3'/>
                      </div>
                  </Col>
                  <Col lg='6' md='6' sm='12'>
                    <div className="about_page_content">
                          <h2 className="section_title">We Are Committed To Provide Safe Ride Solutions</h2>
                          <p className="section_description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Repellendus, reprehenderit ullam accusamus totam delectus 
                            rem non ad atque voluptatum excepturi ipsam sequi expedita. 
                            Ab, maxime dolorem quod facilis expedita deserunt.
                          </p>

                          <p className="section_description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Repellendus, reprehenderit ullam accusamus totam delectus 
                            rem non ad atque voluptatum excepturi ipsam sequi expedita. 
                            Ab, maxime dolorem quod facilis expedita deserunt.
                          </p>
                          <div className="d-flex align-items-center gap-3 mt-4">
                            <span className='fs-4'> <i className="ri-phone-line"></i></span>
                            <div>
                              <h6 className="section_subtitle">Need Any Help?</h6>
                              <h4>0850 212 12 12</h4>
                            </div>
                          </div>
                    </div>
                  </Col>
                 </Row>
             </Container>
          </section>

          <BecomeDriverSection />

          <section>
             <Container>
               <Row>
                <Col lg='12' className='mb-5 text-center'>
                   <h6 className="section_subtitle">Experts</h6>
                   <h2 className="section_title">Our Members</h2>
                </Col>
                <OurMembers />
               </Row>
             </Container>
          </section>

  </Helmet>
}

export default About