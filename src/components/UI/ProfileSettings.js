import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, FormGroup, Label, Col, Row, Input, Button } from 'reactstrap'
import { useAuth } from '../../contexts/AuthContext'
import { updateUserProfile } from '../../services/userService';
import { toast } from 'react-toastify';

function ProfileSettings() {
  const {user} = useAuth();
  const navigate = useNavigate();
  const  [form, setForm] = useState({
    firstName:user.data.firstName, 
    lastName:user.data.lastName, 
    email:user.data.email, 
    userName:user.data.userName
  })
  const [file, setFile] = useState();
  
  
  const onChangeValue = (e) => {
        setForm({...form, [e.target.name]:e.target.value, })
  }
  const handleChangeFile =  (e) => {
      setFile(e.target.files.length > 0 ? e.target.files[0] : null)
  }

  const onSubmitForm = async (e) => {
     e.preventDefault();
     const formData = new FormData();
     
     formData.append('file', file)
     formData.append('firstName', form.firstName)
     formData.append('lastName', form.lastName,)
     formData.append('email', form.email)
     formData.append('userName', form.userName,)
     

     try {
            const response = await updateUserProfile(formData);
            
            navigate(`/account/${form.email}/profile`)
            toast.success(response.message);
            
      } catch (error) {
            toast.error("Bir hata oluştu");
            navigate('/account/' + user.data.email + '/profile')
      }

  }
  return <div className="tab-pane fade show active">
            <h3 className="mb-4">Public Profile</h3>
            <Form encType='multipart/form-data' onSubmit={onSubmitForm}>
              <Row>
              <Col md='12' className='img-edit'>
                <div className="img-circle text-end mb-0">
                                 <img width={100} src={`${process.env.REACT_APP_BASE_ENDPOINT}` + user.data.imageUrl} alt="" className='shadow' />
                                 
                            </div>
                  <div className="img-form">
                        <Label htmlFor='avatar' className="file-icon">
                              <i className="ri-image-edit-fill fs-5"></i>
                              <Input className='file_change' onChange={handleChangeFile} name='file' type='file' id='avatar' />
                        </Label>
                  </div>
                </Col>
              </Row>
              <Row>
                
                <Col md='6'>
                      <FormGroup>
                          <Label>First Name</Label>
                           <Input type='text' onChange={onChangeValue} value={form.firstName}  name='firstName'/>
                      </FormGroup>
                </Col>
                <Col md='6'>
                      <FormGroup>
                          <Label>Last Name</Label>
                           <Input type='text' onChange={onChangeValue} value={form.lastName} name='lastName'/>
                      </FormGroup>
                </Col>
                <Col md='6'>
                      <FormGroup>
                          <Label>Email</Label>
                           <Input type='text'  disabled value={form.email} name='email'/>
                      </FormGroup>
                </Col>
                <Col md='6'>
                      <FormGroup>
                          <Label>User Name</Label>
                           <Input type='text' onChange={onChangeValue} value={form.userName} name='userName'/>
                      </FormGroup>
                </Col>

                  <div className='w-25 d-flex justify-content-between gap-2'>
                      <Button className='btn account_btn'> Update </Button>
                      <Link className='btn account_btn_cancel' to={`/account/${user.data.email}/profile`} > Cancel </Link>
                  </div>
              </Row>
            </Form>
  </div>
}

export default ProfileSettings