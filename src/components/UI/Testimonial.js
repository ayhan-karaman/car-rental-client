import React from 'react'
import Slider from 'react-slick'
import ava1 from '../../assets/images/ava1.png'
import '../../styles/Testimonial.css';
import { getAllTestimonials } from '../../services/testimonialService';
import { useQuery } from 'react-query';

function Testimonial() {
    const {isLoading, data} = useQuery("general:Testimonials", getAllTestimonials)
    if(isLoading) return <h3>Bir Hata Oluştu</h3>
    console.log(data.data);
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        pauseOnHover: true,
        slidesToScroll:1,
        responsive:[
            {
                breakpoint:991,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                },
            },
        ]
    }



  return <Slider {...settings}>
        {
            data.data.map((item) => {
               return  <div key={item.id} className="testimonial py-4 px-3">
                <p className="section_description"> {item.comment} </p>
                <div className="mt-3 d-flex align-items-center gap-4">
                        <img src={ava1} alt="" className='w-25 h-25 rounded-2'/>
                        <div>
                            <h6 className="mb-0 mt-3"> {item.client} </h6>
                            <p className="section_description"> Customer </p>
                        </div>
                </div>
            </div>
            })
        }

  </Slider>
}

export default Testimonial