import React from 'react'
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/OurMembers.css';
import team1 from '../../assets/images/team1.jpg';
import team2 from '../../assets/images/team2.jpg';
import team3 from '../../assets/images/team3.jpg';

const ourMembers  = [
    {
         id:1,
         name:'Jhon Doe',
         experience: '5 years of experience',
         fbUrl:'#',
         instUrl:'#',
         twitUrl:'#',
         linkedinUrl:'#',
         imgUrl:team1
    },
    {
        id:2,
        name:'David Lisa',
        experience: '5 years of experience',
        fbUrl:'#',
        instUrl:'#',
        twitUrl:'#',
        linkedinUrl:'#',
        imgUrl:team2
   },
    {
        id:3,
        name:'Hilton King',
        experience: '5 years of experience',
        fbUrl:'#',
        instUrl:'#',
        twitUrl:'#',
        linkedinUrl:'#',
        imgUrl:team3
    },
    {
        id:4,
        name:'Jhon Doe',
        experience: '5 years of experience',
        fbUrl:'#',
        instUrl:'#',
        twitUrl:'#',
        linkedinUrl:'#',
        imgUrl:team1
    },

]


function OurMembers() {
  return <>
        {
            ourMembers.map((item) => {
                return <Col lg='3' md='3' sm='4' xs='6' key={item.id} className='mb-4'>
                        <div className="single_member">
                            <div className="single_member_img">
                                <img src={item.imgUrl} alt="" className='w-100'/>
                                <div className="single_member_social">
                                   {item.fbUrl &&  <Link to={item.fbUrl}><i className="ri-facebook-line"></i></Link>}
                                   {item.instUrl &&  <Link to={item.instUrl}><i className="ri-instagram-line"></i></Link>}
                                   {item.twitUrl &&  <Link to={item.twitUrl}><i className="ri-twitter-line"></i></Link>}
                                   {item.linkedinUrl &&  <Link to={item.linkedinUrl}><i className="ri-linkedin-line"></i></Link>}
                                </div>
                            </div>
                            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                            <p className="section_description text-center">{item.experience}</p>
                        </div>
                </Col>
            })
        }
  </>
}

export default OurMembers