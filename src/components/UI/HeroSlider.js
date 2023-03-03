import React from 'react'
import Slider from 'react-slick'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../styles/HeroSlider.css'
function HeroSlider() {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed:3000,
        infinite:true,
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1
        
    }
  return <Slider {...settings} className="hero_slider">
        <div  className="slider_item slider_item_01 mt-0">
         <Container>
            <div className="slider_content">
                <h4 className="text-light mb-3"> For Rent ₺400 Per Day</h4>
                <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                <button className="btn reserve_btn mt-4">
                    <Link to="/cars"> Reserve Now</Link>
                </button>
            </div>
         </Container>
        </div>
        <div className="slider_item slider_item_02 mt-0 bg-dark">
         <Container>
            <div className="slider_content">
                <h4 className="text-light mb-3"> For Rent ₺200 Per Day</h4>
                <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                <button className="btn reserve_btn mt-4">
                    <Link to="/cars"> Reserve Now</Link>
                </button>
            </div>
         </Container>
        </div>
        <div className="slider_item slider_item_03 mt-0 bg-info">
         <Container>
            <div className="slider_content">
                <h4 className="text-light mb-3"> For Rent ₺300 Per Day</h4>
                <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

                <button className="btn reserve_btn mt-4">
                    <Link to="/cars"> Reserve Now</Link>
                </button>
            </div>
         </Container>
        </div>

  </Slider>
}

export default HeroSlider