import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useAuth } from '../../contexts/AuthContext'
import { updateUserPasword } from '../../services/userService';
import { toast } from 'react-toastify';

function PasswordSettings() {
    const {user,  logout} = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({email:user.data.email, currentPassword:'', newPassword:'', confirmPassword:''});

    const handlerOnChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handlerOnSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await updateUserPasword({
                 email:form.email,
                 currentPassword:form.currentPassword,
                 newPassword:form.newPassword,
                 confirmPassword:form.confirmPassword
            })
            
            logout(() => {
                navigate(`/auth/login`)
                toast.success(response.message + " Lütfen tekrardan giriş yapınız", {
                    autoClose: 5000,
                })
            });
           
        } catch (error) {
            navigate(`/account/${form.email}/password`)  
            toast.error(error.response.data.message, {
                autoClose: 2000,
            });
        }
    }

  return <div className="" id="password" role='tabpanel'>
            <h3 className='mb-3'>Password Settings</h3>
            <Form onSubmit={handlerOnSubmit}>
                <Row>
                    <Col md='6'>
                        <FormGroup>
                            <Label>Old Password</Label>
                            <Input onChange={handlerOnChange} name='currentPassword' type='password' placeholder='Old password' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <FormGroup>
                            <Label>New Password</Label>
                            <Input name='newPassword' onChange={handlerOnChange} type='password' placeholder='New password' />
                        </FormGroup>
                    </Col>
                    <Col md='6'>
                        <FormGroup>
                            <Label>Confirm new password</Label>
                            <Input name='confirmPassword' onChange={handlerOnChange} type='password' placeholder='Confirm new password' />
                        </FormGroup>
                    </Col>
                </Row>
                    <div className='w-25 d-flex justify-content-between gap-2'>
                        <Button className='btn account_btn'> Update </Button>
                        <Link className='btn account_btn_cancel' to={`/account/${user.data.email}/profile`} > Cancel </Link>
                    </div>
            </Form>
            
  </div>
}

export default PasswordSettings