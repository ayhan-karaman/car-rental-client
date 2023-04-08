import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import CarListing from '../pages/CarListing'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import NotFound from '../pages/NotFound'


function Routers() {
  return <Routes>
     <Route path='/' element={<Navigate to='/home'/> }/>
     <Route path='/home' element={<Home/> }/>
     <Route path='/about' element={<About /> }/>
     <Route path='/cars' element={<CarListing /> }/>
     <Route path='/cars/:car_id' element={<CarDetails/> }/>
     <Route path='/blogs' element={<Blog /> }/>
     <Route path='/blogs/:id' element={<BlogDetails /> }/>
     <Route path='*' element={<NotFound /> }/>

  </Routes>
}

export default Routers