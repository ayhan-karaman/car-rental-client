import React, {useRef, useState} from 'react'
import {Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import '../../styles/Header.css'
import { useAuth } from '../../contexts/AuthContext'
import { toast } from 'react-toastify';

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
  const { loggedIn, user, logout} = useAuth()

  
  let navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleLogout = async ()=>{
     logout(()=>{
       navigate("/");
       toast.warn("Çıkış yapıldı")
     })
  }

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('menu_active')
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
            {
               !loggedIn &&
                <div className='header_top_right d-flex align-items-center justify-content-end gap-3'>
                  <Link to='/auth/login' className='d-flex align-items-center gap-1'><i className="ri-login-circle-line"></i> Login</Link>
                  <Link to='/auth/register' className='d-flex align-items-center gap-1'><i className="ri-user-line"></i> Register</Link>
              </div>
            }
            {
                loggedIn &&

                <div className="header_top_right d-flex align-items-center justify-content-end">
                  <Dropdown className='header_dropdown' isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle className='header_dropdown_toggle'  caret >
                        {!dropdownOpen && 
                        <>
                         <img className='mx-1 rounded-circle p-0' title={user.data.firstName + ' ' + user.data.lastName}  
                         src={`${process.env.REACT_APP_BASE_ENDPOINT}` + user.data.imageUrl}  alt="" width={25} />
                        </>
                        }
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem className='section_title d-flex justify-content-between dropdown_item' header>
                            <span className='mt-1'>{user.data.firstName} {user.data.lastName}</span>
                            <img className='mb-1 rounded-circle' src={`${process.env.REACT_APP_BASE_ENDPOINT}` + user.data.imageUrl} alt="" width={25}/>
                          </DropdownItem>
                          <DropdownItem className='dropdown_profile section_description dropdown_item'>
                            <Link  className='d-flex justify-content-between text-dark' to={`/profile/${user.data.email}`} >Profile <i className="ri-profile-line"></i></Link>
                          </DropdownItem>
                          <DropdownItem className='dropdown_profile section_description dropdown_item'>
                            <Link  className='d-flex justify-content-between text-dark' to={`/account/${user.data.email}/profile`} >Account <i className="ri-settings-4-line"></i></Link>
                          </DropdownItem>
                          <DropdownItem 
                              className='d-flex justify-content-between dropdown_logout section_description dropdown_item'
                              onClick={handleLogout}>
                              Logout  <i className="ri-logout-circle-line"></i>
                          </DropdownItem>


                        </DropdownMenu>
                </Dropdown>
                </div>
            }
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
                  <i className='ri-menu-line' onClick={toggleMenu}></i>
                </span>
                <div className='navigation' ref={menuRef} onClick={toggleMenu}>
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
                    <span><i className="ri-search-line"></i></span>
                  </div>
                </div>


             </div>
        </Container>
      </div>
  </header>
}

export default Header