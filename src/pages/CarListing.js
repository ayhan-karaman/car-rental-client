import React, { useEffect, useState }  from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import CommonSeciton from '../components/UI/CommonSection';
import CarItem from '../components/UI/CarItem';
import { getAllCars, getByBrandNameAndColorNameCars, getByBrandNameCars, getByColorNameCars, } from '../services/carService'
import {  useQuery} from 'react-query'
import { getAllBrands } from '../services/brandService';
import { getAllColors } from '../services/colorService';
import {  createSearchParams,  useLocation,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../styles/CarListing.css'


function CarListing() {
  const location = useLocation()
  const navigate = useNavigate();
  const [params, setParams] = useState({brandName:'', colorName:''})
  const handleFilter = ()=>{
            if(params.brandName !== '' && params.colorName !== '')
                  navigate({ pathname:'/cars', search:`?${createSearchParams(params)}`, })
                  

            else if(params.brandName !== '' && params.colorName === '')
                    navigate({ pathname:'/cars', search:`?${createSearchParams({brandName:params.brandName})}`, })
              

            else if(params.colorName !== '' && params.brandName === '') 
                    navigate({ pathname:'/cars', search:`?${createSearchParams({colorName:params.colorName})}`, })

            else 
                    navigate({ pathname:'/cars', search:'', })        
   }


 
  
  const {isLoading,  isError, refetch, data} = useQuery(["models"],{
      queryFn:async () =>{
             try {
                    const search = decodeURI(location.search);
                    
                    if(search.includes('brandName') && search.includes('colorName'))
                    {
                        
                        return  await getByBrandNameAndColorNameCars(search);
                    }
                    else if(search.includes("brandName") && !search.includes('colorName'))
                    {
                          return await getByBrandNameCars(search)
                    }
                    else if(search.includes('colorName') && !search.includes('brandName'))
                    {
                        return await getByColorNameCars(search)
                    }
                    else
                        return await getAllCars();
             } catch (error) {
                    
                    toast.info(error.response.data.message, {
                       autoClose:2000
                    })
                    return null;
             }
           
            
         
      }
  }
  )
  const brands = useQuery("brands", () => (getAllBrands()))
  const colors = useQuery("colors", () => (getAllColors()))
  useEffect(() => {
      refetch()
  },[ refetch, location, navigate])
  
  if(isLoading) return <div className="d-flex  p-lg-5 justify-content-center align-items-center flex-column">
                    <Spinner className='mt-4 mb-5' animation="grow" style={{color:'#008080'}} />
                    <h4  className="visually">Loading...</h4>
               </div>;

  if(isError) return <h1>Ürün bulunamadı</h1>


  return <Helmet title={'Cars Page'}>
         <CommonSeciton title='Car Listing' />
         <section>
             <Container>
                <Row>
                   <Col lg='12'>
                      <Row className='d-flex justify-content-around'>
                      <Col lg='4'>
                        {
                           brands.isSuccess &&
                           <div className='d-flex align-items-center gap-4 mb-5'>
                            <span className='d-flex align-items-center gap-3'><i className="ri-car-fill"></i> Brand Name </span>

                            <select   onChange={(e) => setParams({...params, brandName:e.target.value})}  className='w-50'>
                              <option value={""} >All Brands</option>
                                 {
                                     brands.data.data.map(item => {
                                          return  <option 
                                            
                                            key={item.id} 
                                            value={item.name}>
                                              {item.name}
                                              </option>
                                     })
                                 }
                            </select>
                        </div>
                        }
                   </Col>
                   {/* <Col lg='4'>
                        <div className='d-flex align-items-center gap-5 mb-5'>
                            <span className='d-flex align-items-center gap-4'><i className="ri-sort-asc"></i> Sort By </span>

                            <select className='w-50'>
                              <option>Select</option>
                              <option value="low">Low to High</option>
                              <option value="high">High to Low</option>
                            </select>
                        </div>
                   </Col> */}
                   <Col lg='4'>
                        {
                            colors.isSuccess &&
                            <div className='d-flex align-items-center gap-4 mb-5'>
                            <span className='d-flex align-items-center gap-3'><i className="ri-palette-fill"></i> Color Name </span>

                                <select onChange={(e) => setParams({...params, colorName:e.target.value})} className='w-50'>
                                  <option value="">All Colors</option>
                                    {
                                         colors.data.data.map(item =>{
                                           return <option  key={item.id} value={item.name}>{item.name}</option>
                                         })
                                    }
                                </select>
                            </div>
                        }
                   </Col>
                       <Col lg='12' className='mb-3 justify-content-between d-flex gap-2'>
                       <Button   onClick={() => {navigate('/cars'); }}  className='mx-5 btn clear_btn'>Clear</Button>
                            <Button  onClick={handleFilter}   className='mx-5 btn filtered_btn'>Filtered</Button>
                          
                        </Col>
                    </Row>
                     
                   </Col>
                   { 
                        data?.data?.map((item) => {
                         return <CarItem  item={item} key={item.modelId} />
                       }) 
                   }
                </Row>
             </Container>
         </section>
      
  </Helmet>

}

export default CarListing