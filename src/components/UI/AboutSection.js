import React from 'react'
import {Container, Row, Col } from 'reactstrap';
import '../../styles/AboutSection.css'
import about_img from '../../assets/images/about_togg_img.png'
const AboutSection = ({aboutClass}) => {
  return <section className='about_section'
   style={aboutClass === 'aboutPage' ? {marginTop:'0px'} : {marginTop:'280px'}}
  >
    <Container >
       <Row>
        <Col lg='6' md='6'>
             <div className="about_section_content">
                <h4 className="section_subtitle">About Us</h4>
                <h2 className="section_title">Welcome to car rent service</h2>
                <p className="seciton_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Illum cum saepe facilis vel maxime doloremque harum, 
                nobis eaque nisi atque iusto alias laborum qui dolore tempora rem 
                voluptatem placeat possimus hic nam dolorem odit est quo labore. 
                Omnis, eaque ducimus?
                </p>
                <div className="about_section_item d-flex align-items-center">
                    <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                    </p>
                    <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                    </p>
                </div>
                <div className="about_section_item d-flex align-items-center">
                    <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                    </p>
                    <p className="section_description d-flex align-items-center gap-2">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
                    </p>
                </div>
             </div>

        </Col>
        <Col lg='6' md='6'>
            <div className="about_img">
                <img src={about_img} alt="..." className='w-100'/>
            </div>
        </Col>
       </Row>
  </Container>
  </section>
}

export default AboutSection
