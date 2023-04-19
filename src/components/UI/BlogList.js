import React from 'react'
import { Col, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/BlogItem.css';
import { useQuery } from 'react-query';
import { getAllBlogs } from '../../services/blogService';
import { dateFormat } from '../../tool';


function BlogList() {
  const {isLoading, data} = useQuery("general:Blogs", getAllBlogs)


  if(isLoading) return <div className="d-flex  p-lg-5 justify-content-center align-items-center flex-column">
                <Spinner className='mt-4 mb-5' animation="grow" style={{color:'#008080'}} />
                <h4  className="visually">Loading...</h4>
          </div>;

  return <>
          {
              data.data.map((item) => {
                    return <BlogItem item={item}  key={item.id}/>
              }) 
          }
  </>
}



const BlogItem = ({item}) => {
  const {id, imageUrl, title, userFullName, description} = item;
  const formatingDate = dateFormat(item.date)

  return <Col lg='4' md='4' sm='6' className='mb-5'>
          <div className="blog_item" >
            <img src={`${process.env.REACT_APP_BASE_ENDPOINT}`+ imageUrl} alt="" className='w-100'/>
            <div className="blog_info p-3" >
              <Link to={`/blogs/${id}`} title={title} className='blog_title'>
                {
                    title.length > 30 ? title.substr(0, 30) + '...' : title
                }</Link>
              <p className="section_description mt-3" >
                  {
                      description.length > 100 ? description.substr(0, 100) : description
                  }
              </p>
              <Link to={`/blogs/${id}`} className='read_more'>Read More</Link>
              <div className="blog_time pt-3 mt-3 d-flex align-items-center justify-content-between">
                 <span className="blog_author">
                    <i className="ri-user-line"> </i> {userFullName}
                 </span>
                 <div className="d-flex align-items-center gap-3">
                     <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-calendar-line"></i> {formatingDate.date}
                     </span>
                     <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-time-line"></i> {formatingDate.time}
                     </span>
                 </div>
              </div>
            </div>
          </div>
  </Col>
}


export default BlogList