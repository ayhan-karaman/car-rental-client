import React from 'react'
import { Container } from 'reactstrap'
import '../../styles/CommonSection.css'



function CommonSection({title}) {
  return <section className="common_section">
        <Container className='text-center'>
                <h1 className='text-light'>{title}</h1>
        </Container>
  </section>
}

export default CommonSection