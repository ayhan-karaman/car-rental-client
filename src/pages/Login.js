import React, {  useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import { Link,  useNavigate, useLocation } from 'react-router-dom'
import lgnImage from '../assets/images/car-3.png'
import { useAuth } from '../contexts/AuthContext'
import { userLogin } from '../services/auth'
import { toast } from 'react-toastify'


function Login() {
  const {login} =useAuth();
  const navigete = useNavigate();
  const [form, setForm] = useState({emailOrUserName:'', password:''});
  const location = useLocation();
   

  const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
  }

  const onSubmitForm =  async (e)=>{
    e.preventDefault();
    try {
           const response = await userLogin({emailOrUserName:form.emailOrUserName, password:form.password});
           login({...response, emailOrUserName:form.emailOrUserName});
           toast.success("Giriş Yapıldı")
           return navigete(location.state?.preUrl ? location.state.preUrl : "/")  
          
    } catch (error) { 
            navigete('/auth/login');
            toast.error(error.response.data)
    }
    
  }

  return  <Helmet title="Login page">
        <section>
            <Container >
              <Row  className='d-flex justify-content-around align-items-center sign_content mt-0'>
                   <Col lg='12' className='h-25 d-flex justify-content-center'>
                        <div className='logo'>
                          <h1 >
                            <Link to='/home' className='d-flex align-items-center gap-3'> 
                              <i className='ri-car-line'></i>
                              <span>Rent Car <br/> Service</span>
                            </Link>
                          </h1>
                      </div>
                   </Col>
                 
                  <Col lg='4' md='6' sm='8' className='d-flex justify-content-center mb-3 mx-2'>
                       <img src={lgnImage} alt="" width={400}  />
                  </Col>
                  <Col lg='4' md='6' sm='8'>
                        <Form onSubmit={onSubmitForm} >
                            <h3 className='lead text-center fw-normal mb-5'> Sign in</h3>
                           <FormGroup className='mb-3'>
                                <Input type='text' name='emailOrUserName' onChange={onChangeInput} placeholder='Enter a valid email address or user name'/>
                           </FormGroup>
                           <FormGroup className='mb-3'>
                                <Input type='password' placeholder='Password' name='password' onChange={onChangeInput}/>
                           </FormGroup>

                           <div className="text-center account_route text-lg-start mt-4 pt-2">
                              <button className="btn sign_btn">  Login  </button>
                              <p   className="small text-end fw-bold mt-2 pt-1 mb-0 section_description">Don't have an account? 
                                <Link  to='/auth/register'> Register</Link>
                              </p>
                           </div>
                        </Form>
                  </Col>
              </Row>
              
            </Container>
        </section>
  </Helmet>
}

export default Login

