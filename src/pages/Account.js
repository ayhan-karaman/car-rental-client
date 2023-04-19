import React from 'react'
import { Container, Nav } from 'reactstrap'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Account.css'
import { NavLink, Outlet } from 'react-router-dom';

const links = [
    {
        path:'profile',
        display:'Account',
        icon:'ri-home-7-line mr-1'
    },
    {
        path:'password',
        display:'Password',
        icon:'ri-key-2-line mr-1'
    }
]



function Account() {
    const {user} = useAuth();
   
  return <section>
        <Container>
              <h1 className="mb-5">Account Settings</h1>
              <div className="bg-white shadow rounded-lg d-block d-sm-flex">
                    <div className="profile-tab-nav border-right">
                          <div className="p-4">
                            <div className="img-circle text-center mb-3">
                                 <img width={100} src={`${process.env.REACT_APP_BASE_ENDPOINT}` + user.data.imageUrl} alt="" className='shadow' />
                                 
                            </div>
                             <h4 className="text-center">{user.data.firstName} {user.data.lastName}</h4>
                          </div>
                          <Nav className="flex-column nav-pills" tabs>
                                {
                                    links.map((item, index) => {
                                       return <NavLink  className={navClass => navClass.isActive ? 'nav-link account_active d-flex gap-2' :'nav-link d-flex gap-2'}
                                                         key={index} to={item.path}>
                                                                
                                                        <i className={item.icon}></i>
                                                        <span >{item.display}</span>
                                                    </NavLink>
                                    })
                                }
                          </Nav>
                    </div>
                    <div className="tab-content p-4 p-md-5"  id="v-pills-tabContent">
                        <Outlet  />
                    </div>
              </div>
        </Container>

  </section>
}

export default Account