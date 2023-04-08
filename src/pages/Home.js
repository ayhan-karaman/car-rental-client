import React from 'react'
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import FindCarForm from '../components/UI/FindCarForm';
import { Container, Row, Col } from 'reactstrap';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import CarItem from '../components/UI/CarItem';
import { getAllCars } from '../services/carService'
import { useQuery} from 'react-query'
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';


function Home() {
   const {isLoading, data} = useQuery("general:Models", getAllCars)

  
  
  
  if(isLoading) return <h3>Bir Hata Oluştu</h3>
  console.log()
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

        {/* ======== about section  ======== */}
        <AboutSection />
      {/* ======== services section  ======== */}

      <section>
         <Container>
            <Row>
               <Col lg='12' className='mb-5 text-center'>
                  <h6 className="section_subtitle">See our</h6>
                  <h2 className="section_title">Popular Services</h2>
               </Col>
               <ServicesList />
            </Row>
         </Container>
      </section>
         {/* ======== car offer section  ======== */}
         <section>
             <Container>
                <Row>
                  <Col lg='12' className='text-center mb-5'>
                        <h6 className="section_subtitle">Come With</h6>
                        <h2 className="section_title">Hot Offers</h2>
                  </Col>
                   {
                        data.data.map((item) => {
                         return <CarItem item={item} key={item.modelId} />
                       })
                   }
                </Row>
             </Container>
         </section>
         {/* ======== become a driver section  ======== */}
         <BecomeDriverSection />

         {/* ======== testimonial section  ======== */}
         <section>
            <Container>
                <Row>
                  <Col lg='12' className='mb-4 text-center'>
                     <h6 className="section_subtitle">Our clients says</h6>
                     <h2 className="section_title">Testimonials</h2>
                  </Col>
                  <Testimonial />
                </Row>
            </Container>
         </section>

      {/* ======== blog section  ======== */}
      <section>
            <Container>
                <Row>
                  <Col lg='12' className='mb-5 text-center'>
                     <h6 className="section_subtitle">Explore our blogs</h6>
                     <h2 className="section_title">Latest Blogs</h2>
                  </Col>
                  <BlogList />
                </Row>
            </Container>
         </section>
  </Helmet>
}

export default Home