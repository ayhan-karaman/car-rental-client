import React from 'react'
import {Container, Row, Col } from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';
import '../../styles/Header.css'

const navLinks = [
   {
       path:'/home',
       display:'Home'
   },
   {
      path:'/about',
      display:'About'
   },
   {
        path:'/cars',
        display:'Cars'
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

function Header() {
  return <header className='header'>
       {/* ======== header top ======== */}
       <div className='header_top'>
       <Container>
        <Row>
          <Col lg="6" md="6" sm="6">
             <div className='header_top_left'>
              <span>Need Help?</span>
              <span className='header_top_help'>
                <i className="ri-phone-fill"></i> 0850 212 12 12
              </span>
             </div>
          </Col>
          <Col lg="6" md="6" sm="6">
            <div className='header_top_right d-flex align-items-center justify-content-end gap-3'>
              <Link to='#' className='d-flex align-items-center gap-1'><i className="ri-login-circle-line"></i> Login</Link>
              <Link to='#' className='d-flex align-items-center gap-1'><i className="ri-user-line"></i> Register</Link>
            </div>
          </Col>
        </Row>
      </Container>
       </div>

       {/* ======== header middle ======== */}
       <div className='header_middle'>
        <Container>
           <Row>
             <Col lg='4' md='3' sm='4'>
                <div className='logo'>
                  <h1 >
                    <Link to='/home' className='d-flex align-items-center gap-3'> 
                    <i className='ri-car-line'></i>
                     <span>Rent Car <br/> Service</span>
                     </Link>
                  </h1>
                </div>
             </Col>
             <Col lg='3' md='3' sm='4'>
               <div className='header_location  d-flex align-items-center gap-2'>
                  <span> <i className='ri-earth-line'></i> </span>
                  <div className='header_location_content'>
                        <h4>Turkey</h4>
                        <h6>Istanbul City, Turkey</h6>
                  </div>
               </div>
             </Col>
             <Col lg='3' md='3' sm='4'>
               <div className='header_location d-flex align-items-center gap-2'>
                  <span> <i className='ri-time-line'></i> </span>
                  <div className='header_location_content'>
                        <h4>Sunday to Friday</h4>
                        <h6>10am - 7pm</h6>
                  </div>
               </div>
             </Col>
              <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
                 <button className='header_btn btn'>
                    <Link to='/contact'>
                       <i className='ri-phone-line'></i> Request a call
                    </Link>
                 </button>
              </Col>
           </Row>
        </Container>
       </div>

{/* ======== main navigation ======== */}
      <div className='main_navbar'>
        <Container>
             <div className='navigation_wrapper d-flex align-items-center justify-content-between'> 
                <span className='mobile_menu'>
                  <i className='ri-menu-line'></i>
                </span>
                <div className='navigation'>
                  <div className='menu'>
                    {
                       navLinks.map((item, index) => {
                            return <NavLink className={navClass => navClass.isActive ? 'nav_active nav_item' :'nav_item'} key={index} to={item.path}>{item.display}</NavLink>
                       })
                    }
                  </div>
                </div>

                <div className='nav_right'>
                  <div className='search_box'>
                    <input type='text' placeholder='Search'/>
                    <span><i class="ri-search-line"></i></span>
                  </div>
                </div>


             </div>
        </Container>
      </div>
  </header>
}

export default Header