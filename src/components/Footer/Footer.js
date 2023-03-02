import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {Link } from 'react-router-dom'
import '../../styles/Footer.css';

const quikLinks = [
  
  {
     path:'/about',
     display:'About'
  },
  {
      path:'#',
      display:'Privacy Policy'
  },
  {
       path:'/cars',
       display:'Car Listing'
  },
  {
      path:'/blogs',
      display:'Blog'
  },
   {
       path:'/contact',
       display:'Contact'
   },

]

function Footer() {
  return <footer className='footer' style={{marginTop:290}}>
      <Container>
        <Row>
        <Col lg='4' md='4' sm='12'>
        <div className='logo'>
                  <h1 >
                    <Link to='/home' className='d-flex align-items-center gap-3'> 
                    <i className='ri-car-line'></i>
                     <span>Rent Car <br/> Service</span>
                     </Link>
                  </h1>
                  <p className='footer_logo_content'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aliquam, impedit porro? Labore vel aliquam unde explicabo 
                  culpa quia aperiam nulla rerum voluptate beatae. 
                  Accusamus dolores numquam nobis maiores delectus minus?
                  </p>
           </div>
        </Col>
        <Col lg='2' md='4' sm='6'>
              <div className='mb-4'>
                 <h5 className='footer_link_title'>Quik Links</h5>
                 <ListGroup>
                   {
                      quikLinks.map((item, index) => {
                        return <ListGroupItem key={index} className='p-0 mt-3'>
                              <Link to={item.path}>{item.display}</Link>
                        </ListGroupItem>

                      })
                   }
                 </ListGroup>
              </div>
        </Col>
        <Col lg='3' md='4' sm='6'>
          <div className='mb-4'>
          <h5 className='footer_link_title'>Head Office</h5>
          <p className='office_info'>Taksim, Istanbul, Turkey</p>
          <p className='office_info'>Phone: +90 850 212 12 12</p>
          <p className='office_info'>Email: info@krmn.com.tr</p>
          <p className='office_info'>Office Time: 10am - 7pm</p>
          </div>
        </Col>
        <Col lg='3' md='4'>
          <div className='mb-4'>
          <h5 className='footer_link_title'>Newsletter</h5>
          <p className='section_description'>Subscribe our newsletter</p>
          <div className='newsletter'>
              <input type='email' placeholder='Email' />
              <span> <i className='ri-send-plane-line'></i> </span>
          </div>
          </div>
        </Col>
        </Row>
      </Container>
  </footer>
}

export default Footer