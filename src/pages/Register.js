import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Form, FormFeedback, FormGroup, Input, InputGroup, InputGroupText, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import lgnImage from '../assets/images/register.png'
import '../styles/AuthPage.css'
import { useAuth } from '../contexts/AuthContext'
import { userRegister } from '../services/auth'
import { useFormik } from 'formik'
import {toast} from 'react-toastify'
import validationSchema from '../validations/registerValidation'


function Register() {
   const [isPasswordShowHide, setIsPasswordShowHide] = useState(false)
   const [isConfirmShowHide, setIsConfirmShowHide] = useState(false)
   const passwordClick = () =>{
               setIsPasswordShowHide(!isPasswordShowHide)
   }
   const confirmPasswordClick = () => {
           setIsConfirmShowHide(!isConfirmShowHide)
   }

  const {login} =useAuth();
  const navigete = useNavigate();
  const initialValue = {firstName:'', lastName:'', userName:'', email:'', password:'', confirmPassword:''}

  const formik = useFormik({
       initialValues:initialValue,
       onSubmit:async(values, bag) => {
             try {
                const response = await userRegister({
                  firstName:values.firstName,
                  lastName:values.lastName,
                  userName:values.userName,
                  email:values.email, 
                  password:values.password
                });
                console.log(response)
                navigete("/auth/login")
             } catch (error) {
                navigete('/auth/register'); 
                toast.error(error.response.data)
             }
       },
       validationSchema
  })

  return <Helmet title="Register page">
  <section>
      <Container >
        <Row  className='d-flex justify-content-around align-items-center sign_content'>
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
              
               <Col lg='4' md='6' sm='8' className='d-flex justify-content-center mb-3 mx-2' >
                    <img src={lgnImage} alt="" width={400}  />
               </Col>
            <Col lg='4' md='6' sm='8'>
                  <Form onSubmit={formik.handleSubmit}>
                      <h3 className='lead text-center fw-normal mb-5 '> Sign up</h3>
                      <FormGroup className='mb-3'>
                          <Input 
                          className='auth_input h-100'
                          name='firstName' 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}

                          invalid={
                            !!formik.errors.firstName &&
                             (!!formik.touched.firstName || !!formik.dirty.firstName)
                          } 
                          valid={
                            !formik.errors.firstName &&
                             (!!formik.touched.firstName || !!formik.dirty.firstName)
                          } 
                          type='text' 
                          placeholder='First Name'/>
                          {
                             !!formik.errors.firstName &&
                             (!!formik.touched.firstName || !!formik.dirty.firstName) &&
                             <FormFeedback>
                                   {formik.errors.firstName}
                             </FormFeedback>
                          }
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input 
                          name='lastName' 
                          className='auth_input h-100'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                          invalid={
                            !!formik.errors.lastName &&
                             (!!formik.touched.lastName || !!formik.dirty.lastName)
                          } 
                          valid={
                            !formik.errors.firstName &&
                             (!!formik.touched.lastName || !!formik.dirty.lastName)
                          }  
                          type='text' 
                          placeholder='Last Name'/>
                          {
                             !!formik.errors.lastName &&
                             (!!formik.touched.lastName || !!formik.dirty.lastName) &&
                             <FormFeedback>
                                   {formik.errors.lastName}
                             </FormFeedback>
                          }
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input 
                          className='auth_input h-100'
                          name='userName' 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur} 
                          value={formik.values.userName}
                          invalid={
                            !!formik.errors.userName &&
                             (!!formik.touched.userName || !!formik.dirty.userName)
                          } 
                          valid={
                            !formik.errors.userName &&
                             (!!formik.touched.userName || !!formik.dirty.userName)
                          } 
                          type='text' 
                          placeholder='User Name'/>
                          {
                             !!formik.errors.userName &&
                             (!!formik.touched.userName || !!formik.dirty.userName) &&
                             <FormFeedback>
                                   {formik.errors.userName}
                             </FormFeedback>
                          }
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input 
                          name='email' 
                          className='auth_input h-100'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur} 
                          value={formik.values.email}
                          invalid={
                            !!formik.errors.email &&
                             (!!formik.touched.email || !!formik.dirty.email)
                          } 
                          valid={
                            !formik.errors.email &&
                             (!!formik.touched.email || !!formik.dirty.email)
                          } 
                          type='email' 
                          placeholder='Email address'/>
                          {
                             !!formik.errors.email &&
                             (!!formik.touched.email || !!formik.dirty.email) &&
                             <FormFeedback>
                                   {formik.errors.email}
                             </FormFeedback>
                          }
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <InputGroup>
                                 <Input 
                                 name='password' 
                                 className='auth_input h-100'
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur} 
                                 value={formik.values.password}
                                 invalid={
                                    !!formik.errors.password &&
                                    (!!formik.touched.password || !!formik.dirty.password)
                                 } 
                                 valid={
                                    !formik.errors.password &&
                                    (!!formik.touched.password || !!formik.dirty.password)
                                 } 
                                 type={!isPasswordShowHide ? 'password' : 'text'} 
                                 placeholder='Password'/>
                                 <InputGroupText onClick={passwordClick} className='eye_content'>
                                   <i className={!isPasswordShowHide ? 'ri-eye-line' : 'ri-eye-off-line text-secondary' }></i>
                                  </InputGroupText>
                                 {
                                    !!formik.errors.password &&
                                    (!!formik.touched.password || !!formik.dirty.password) &&
                                    <FormFeedback>
                                          {formik.errors.password}
                                    </FormFeedback>
                                 }
                           </InputGroup>
                     </FormGroup>
                     <FormGroup className='mb-3'>
                        <InputGroup>
                          <Input 
                          name='confirmPassword' 
                          className='auth_input h-100'
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur} 
                          value={formik.values.confirmPassword}
                          invalid={
                            !!formik.errors.confirmPassword &&
                             (!!formik.touched.confirmPassword || !!formik.dirty.confirmPassword)
                          } 
                          valid={
                            !formik.errors.confirmPassword &&
                             (!!formik.touched.confirmPassword || !!formik.dirty.confirmPassword)
                          } 
                          type={!isConfirmShowHide ? 'password' : 'text'} 
                          placeholder='Confirm Password'/>
                          <InputGroupText onClick={confirmPasswordClick} className='eye_content'>
                                   <i className={!isConfirmShowHide ? 'ri-eye-line' : 'ri-eye-off-line text-secondary' }></i>
                           </InputGroupText>
                          {
                             !!formik.errors.confirmPassword &&
                             (!!formik.touched.confirmPassword || !!formik.dirty.confirmPassword) &&
                             <FormFeedback>
                                   {formik.errors.confirmPassword}
                             </FormFeedback>
                          }
                        </InputGroup>
                     </FormGroup>

                     <div className="text-center account_route text-lg-start mt-4 pt-2">
                        <button type='submit' className="btn sign_btn">  Register  </button>
                        <p  className="small text-end fw-bold mt-2 pt-1 mb-0 section_description">I already have an account  
                          <Link  to='/auth/login'> Login</Link>
                        </p>
                     </div>
                  </Form>
            </Col>
        </Row>
        
      </Container>
  </section>
</Helmet>
}

export default Register