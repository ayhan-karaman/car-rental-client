import React, { useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query';
import { getAllBlogs, getByBlogId } from '../services/blogService';
import { dateFormat } from '../tool';
import commentImg from '../assets/images/ava1.png'
import '../styles/BlogDetails.css'



function BlogDetails() {
  const { blog_id } = useParams();

  const singleBlog = useQuery(['blog', blog_id], ()=> (getByBlogId(blog_id)));
  const blogs = useQuery('blogs', () => (getAllBlogs()))
  

 
  useEffect(() => {
      window.scrollTo(0, 0)
      
  }, [singleBlog.data])
  if(singleBlog.isLoading) return <h1>Bir Sorun Oluştu</h1>
  const formatingDate = dateFormat(singleBlog.data.data.date)



  return <Helmet title={singleBlog.data.data.title}>
       
         <section>
         <Container>
            <Row>
               <Col lg='8' md='8'>
                  <div className="blog_details">
                     <img src={`${process.env.REACT_APP_BASE_ENDPOINT}`+ singleBlog.data.data.imageUrl} alt="" className='w-100' />
                     <h2 className="section_title mt-4">{singleBlog.data.data.title}</h2>
                     <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                     <span className="blog_author">
                         <i className="ri-user-line"> </i> {singleBlog.data.data.userFullName}
                      </span>
                      <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-calendar-line"></i> {formatingDate.date}
                     </span>
                     <span className="d-flex align-items-center gap-1 section_description">
                        <i className="ri-time-line"></i> {formatingDate.time}
                     </span>
                     </div>
                     <p className="section_description">
                       {singleBlog.data.data.description}
                     </p>
                     <h6 className="ps-5 fw-normal"> <blockquote className='fs-4'>{"************************************************************"}</blockquote> </h6>
                     <p className="section_description">
                       {singleBlog.data.data.description}
                     </p>
                  </div>

                  <div className="comment_list mt-5">
                    <h4 className="mb-5"> Comments</h4>

                    <div className="single_comment d-flex gap-3">
                      <img src={commentImg} alt="" />
                    <div className="comment_content">
                      <h6 className='fw-bold'>David Visa</h6>
                      <p className="section_description mb-0">14, July, 2022</p>
                      <p className="section_description"> Lorem ipsum dolor sit amet consectetur, 
                      adipisicing elit. A magnam natus dicta deserunt animi eligendi hic quibusdam 
                      dignissimos perspiciatis autem?</p>
                      <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Replay
                      </span>
                    </div>
                    </div>
                    
                  </div>
                  {/* ================ comment form ================ */}
                  <div className="leave_comment_form">
                      <h4>Leave a Comment</h4>
                      <p className="section_description">You must sign-in to make or comment a post</p>
                      <Form>
                          <FormGroup className='d-flex gap-3'>
                            <Input type="text" placeholder='Full Name' />
                            <Input type="email" placeholder='Email' />
                          </FormGroup>
                          <FormGroup>
                             <textarea name='comment' className='w-100 py-2 px-3' placeholder='Comment...' rows="5"></textarea>
                          </FormGroup>

                          <button className="btn comment_btn mt-3">Post a Comment</button>
                      </Form>
                  </div>
               </Col>
              
               <Col lg='4' md='4'>
                    <div className="recent_post mb-4">
                       <h5 className="fw-bold">Recent Posts</h5>
                    </div>
                    {
                          blogs.data.data.map((item) => {
                              return <div key={item.id} className="recent_blog_post mb-4">
                                      <div className="recent_blog_item d-flex gap-3">
                                        <img src={`${process.env.REACT_APP_BASE_ENDPOINT}`+item.imageUrl} alt="" className='w-25 rounded-2'  />
                                        <h6>
                                          <Link to={`/blogs/${item.id}`}> {item.title} </Link>
                                        </h6>
                                      </div>
                              </div>
                          })  
                    }
               </Col>
               
            </Row>
        </Container>
         </section>
  </Helmet>


}

export default BlogDetails