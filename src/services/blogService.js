import axios from "axios";

export const getAllBlogs = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Blogs/all-blogs`);
    return data;
 }

 export const getByBlogId = async(blog_id) => {   
     const { data } = await axios.get(`${process.env.REACT_APP_BASE_API_ENDPOINT}/Blogs/get-by-id-blog?id=${blog_id}`)
     return data;
 }