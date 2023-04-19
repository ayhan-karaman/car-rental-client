import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import lgnImage from '../assets/images/register.png'
import '../styles/SignPage.css'
import { useAuth } from '../contexts/AuthContext'
import { userRegister } from '../services/auth'

function Register() {
  const {login} =useAuth();
  const navigete = useNavigate();
  const [form, setForm] = useState({firstName:'', lastName:'', userName:'', email:'', password:''});
  
  const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
  }
  const onSubmitForm =  async (e)=>{
    e.preventDefault();
    try {
           const response = await userRegister({
            firstName:form.firstName,
            lastName:form.lastName,
            userName:form.userName,
            email:form.email, 
            password:form.password
          });
           
            navigete("/auth/login")
    } catch (error) {
            navigete('/auth/register');
    }
    
  }



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
                  <Form onSubmit={onSubmitForm}>
                      <h3 className='lead text-center fw-normal mb-5 '> Sign up</h3>
                      <FormGroup className='mb-3'>
                          <Input name='firstName' onChange={onChangeInput} type='text' placeholder='First Name'/>
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input name='lastName' onChange={onChangeInput} type='text' placeholder='Last Name'/>
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input name='userName' onChange={onChangeInput} type='text' placeholder='User Name'/>
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input name='email' onChange={onChangeInput} type='email' placeholder='Email address'/>
                     </FormGroup>
                     <FormGroup className='mb-3'>
                          <Input name='password' onChange={onChangeInput} type='password' placeholder='Password'/>
                     </FormGroup>

                     <div className="text-center account_route text-lg-start mt-4 pt-2">
                        <button className="btn sign_btn">  Register  </button>
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