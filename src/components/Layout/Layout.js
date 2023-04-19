import React, { Fragment } from 'react'
import Routers from '../../routers/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { useLocation  } from 'react-router-dom';

function Layout() {
    const location = useLocation()
  return <Fragment>
       {location.pathname.startsWith('/auth') ? '' : <Header /> }
      <div>
        <Routers/>
      </div>
      {location.pathname.startsWith('/auth') ? '' : <Footer /> }
  </Fragment>
}

export default Layout