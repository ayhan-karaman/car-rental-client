import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Row } from 'reactstrap'
import { Link,  useNavigate, useLocation } from 'react-router-dom'
import lgnImage from '../assets/images/car-3.png'
import { useAuth } from '../contexts/AuthContext'
import { userLogin } from '../services/auth'
import { toast } from 'react-toastify'
import { useFormik } from "formik";
import validationSchema from '../validations/loginValidation'
import '../styles/AuthPage.css'
 
function Login() {
  const [isShowHide, setIsShowHide] = useState(false);
  const showHideClick = () => {
        setIsShowHide(!isShowHide)
  }

  const {login} =useAuth();
  const initialValues = {
       emailOrUserName:'',
       password:''
  }
  const navigete = useNavigate();
  const location = useLocation();
  const formik = useFormik({
      initialValues:initialValues,
      onSubmit:async(values, bag) =>{
        try {
          const response = await userLogin({emailOrUserName:values.emailOrUserName, password:values.password});
          login({...response, emailOrUserName:values.emailOrUserName});
          toast.success("Giriş Yapıldı")
          return navigete(location.state?.preUrl ? location.state.preUrl : "/")  

        } catch (error) {
          
               navigete('/auth/login');              
               toast.error(error.response.data);
               bag.setErrors({general:error.response.data})
        } 
      },
      validationSchema
  })

 
  


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
                        <Form onSubmit={formik.handleSubmit} >
                            <h3 className='lead text-center fw-normal mb-5'> Sign in</h3>
                           <FormGroup className='mb-3'>
                                <Input 
                                type='text'
                                name='emailOrUserName' 
                                className='auth_input h-100'
                                value={formik.values.emailOrUserName}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                invalid={
                                  !!formik.errors.emailOrUserName &&
                                  (!!formik.touched.emailOrUserName || !!formik.dirty.emailOrUserName)
                                }
                                valid={
                                  !formik.errors.emailOrUserName &&
                                  (!!formik.touched.emailOrUserName || !!formik.dirty.emailOrUserName)
                                }
                                placeholder='Enter a valid email address or user name'
                                />
                                {
                                  !!formik.errors.emailOrUserName &&
                                  (!!formik.touched.emailOrUserName || !!formik.dirty.emailOrUserName) &&
                                  <FormFeedback  typeof='invalid'>
                                       {formik.errors.emailOrUserName}
                                  </FormFeedback>
                                }
                           </FormGroup>
                           <FormGroup className='mb-3'>
                           <InputGroup>
                                      <Input 
                                     
                                      type={!isShowHide ? 'password' : 'text'} 
                                      className='h-100 auth_input'
                                      placeholder='Password' 
                                      value={formik.values.password}
                                      onBlur={formik.handleBlur}
                                      invalid={
                                        !!formik.errors.password &&
                                        (!!formik.touched.password || !!formik.dirty.password)
                                      }
                                      valid={
                                        !formik.errors.password &&
                                        (!!formik.touched.password || !!formik.dirty.password)
                                      }
                                      name='password' 
                                      onChange={formik.handleChange}
                                      />
                                   <InputGroupText onClick={showHideClick} className='eye_content'>
                                   <i className={!isShowHide ? 'ri-eye-line' : 'ri-eye-off-line text-secondary' }></i>
                                  </InputGroupText>
                                  {
                                      !!formik.errors.password &&
                                      (!!formik.touched.password || !!formik.dirty.password) && 
                                          <FormFeedback typeof='invalid'>
                                                  {formik.errors.password}
                                          </FormFeedback>
                                  }
                              </InputGroup>
                                
                           </FormGroup>

                           <div className="text-center account_route text-lg-start mt-4 pt-2">
                              <button type='submit' className="btn sign_btn">  Login  </button>
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

