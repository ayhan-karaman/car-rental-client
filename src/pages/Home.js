import React from 'react'
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import FindCarForm from '../components/UI/FindCarForm';
import { Container, Row, Col } from 'reactstrap';
function Home() {
  return <Helmet title={'Home Page'}>
        {/* ======== her section ======== */}
        <section className="p-0 hero_slider_section">
           <HeroSlider />
            <div className="hero_form">
                <Container>
                   <Row className="form_row">
                      <Col lg='4' md='4'>
                         <div className="find_cars_left">
                          <h2>Find your best car here</h2>
                         </div>
                      </Col>
                      <Col lg='8' md='8' sm='12'>
                          <FindCarForm />
                      </Col>
                   </Row>
                </Container>
            </div>
        </section>
  </Helmet>
}

export default Home