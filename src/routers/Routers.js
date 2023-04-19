import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'
import ProtectedRoute from './ProtectedRoute'
import Account from '../pages/Account'
import ProfileSettings from '../components/UI/ProfileSettings'
import PasswordSettings from '../components/UI/PasswordSettings'


function Routers() {
  return <Routes>
     <Route path='/' element={<Navigate to='/home'/> }/>
     <Route path='/home' element={<Home/> }/>
     <Route path='/about' element={<About /> }/>
     <Route path='/cars' element={<CarListing /> }/>
     <Route path='/cars/:car_id' element={<CarDetails/> }/>
     <Route path='/blogs' element={<Blog /> }/>

     <Route path='/blogs/:blog_id' element={<BlogDetails /> }/>
     <Route path='/contact' element={<Contact /> }/>

     <Route exact path='/' element={<ProtectedRoute/>}>
        <Route path='profile/:user_email' element={<UserProfile/>}/>
        <Route path='account/:user_email' element={<Account/>}> 
               <Route path='profile'  element={<ProfileSettings/>}></Route>
               <Route path='password'  element={<PasswordSettings/>}></Route>
        </Route>    
     </Route>





     <Route path='/auth/login' element={<Login /> }/>
     <Route path='/auth/register' element={<Register /> }/>
     <Route path='*' element={<NotFound /> }/>

  </Routes>
}

export default Routers