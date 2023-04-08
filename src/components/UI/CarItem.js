import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/CarItem.css'
const CarItem = (props) => {
  
  const {modelId, modelImageUrls, modelName, brandName, gearType, isGps, isAirConditioner, dailyPrice} = props.item;
  

  return <Col lg='4' md='4' sm='6' className='mb-5'> 
        <div className="car_item">
          <div className="car_img">
              <img src={`${process.env.REACT_APP_BASE_ENDPOINT}`+modelImageUrls[0]} alt={modelImageUrls[0]} className='w-100'/>
          </div>
          <div className="car_item_content mt-4">
             <h4 className="section_title text-center">{brandName}</h4>
             <h6 className="rent_price text-center mt-4">₺ {dailyPrice} <span>/ Day</span></h6>
             <div className="car_item_info d-flex align-items-center justify-content-between mt-3 mb-4">
              <span className='d-flex align-items-center gap-1'><i className="ri-car-line"></i>{modelName}</span>
              <span className='d-flex align-items-center gap-1'><i className="ri-settings-2-line"></i>{gearType}</span>
              <span className='d-flex align-items-center gap-1'><i className="ri-gps-line"></i>{isGps ? "GPS" : "NOT-GPS"}</span>
              <span className='d-flex align-items-center gap-1'><i className="ri-snowy-line"></i>{isAirConditioner ? "AC" : "NOT-AC"}</span>
             </div>
              <button className="w-50 car_item_btn car_btn_rent">
                <Link to={`/models/${modelId}`} >Rent</Link>
              </button>

              <button className="w-50 car_item_btn car_btn_details">
                <Link to={`/cars/${modelId}`} >Details</Link> 
              </button>
          </div>
        </div>
  </Col>
}

export default CarItem
