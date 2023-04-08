import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../styles/BecomeDriverSection.css';
import driverImg from '../../assets/images/car-3.png'
function BecomeDriverSection() {
  return <section className="become_driver">
     <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become_driver_img'>
                <img src={driverImg} alt="" className='w-100'/>
            </Col>
            <Col lg='6' md='6' sm='12'>
                <h2 className="section_title become_driver_title">
                    Do You Want to Earn With Us? So Don't Be Late
                </h2>

                <button className="btn become_driver_btn mt-4">Become a Driver</button>
            </Col>
        </Row>
     </Container>
  </section>
}

export default BecomeDriverSection