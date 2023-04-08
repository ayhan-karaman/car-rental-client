import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import CommonSeciton from '../components/UI/CommonSection';
import CarItem from '../components/UI/CarItem';
import { getAllCars } from '../services/carService'
import { useQuery} from 'react-query'


function CarListing() {
  const {isLoading, data} = useQuery("general:Models", getAllCars)

  
  
  
  if(isLoading) return <h3>Bir Hata Oluştu</h3>

  return <Helmet title={'Cars Page'}>
         <CommonSeciton title='Car Listing' />
         <section>
             <Container>
                <Row>
                   <Col lg='12'>
                        <div className='d-flex align-items-center gap-3 mb-5'>
                            <span className='d-flex align-items-center gap-2'><i className="ri-sort-asc"></i> Sort By </span>

                            <select>
                              <option>Select</option>
                              <option value="low">Low to High</option>
                              <option value="high">High to Low</option>
                            </select>
                        </div>
                   </Col>
                   {
                        data.data.map((item) => {
                         return <CarItem item={item} key={item.modelId} />
                       })
                   }
                </Row>
             </Container>
         </section>
      
  </Helmet>
}

export default CarListing