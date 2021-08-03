import React from 'react';
import BlogsDetails from '../BlogsDetails/BlogsDetails';
import img1 from '../../../images/5790-removebg.png'
import img2 from '../../../images/Ellipse 1.png'



const Blogs = () => {
    const blogsData =[
        {
           name:'rashed-Kabir', 
           date: '22-10-2018',
           title:'chck at least in a doctor in a year for you teath',
           backGround: 'primary'
           
           
        },
        {
            name:'Dr. Caudi', 
            date: '23-april-2019',
            title:'2 times of brush in a day can keep your teath healthy',
            content: 'its a big establish fact that by the readable of a lot of lot layout. the point',
            img: img1
         },
         {
            name:'Dr. Caudi', 
            date: '23-april-2019',
            title:'2 times of brush in a day can keep your teath healthy',
            content: 'its a big establish fact that by the readable of a lot of lot layout. the point',
            img: img2
         }
    ]
    return (
        <section className=" mt-5 ms-5 w-75 ">
            <div className="text-center">
                <h6 className="text-primary text-uppercase">Our Blog</h6>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row  ms-5">
                {
                    blogsData.map(blog => <BlogsDetails blog={blog}></BlogsDetails>)
                }
            </div>
        </section>
    );
};

export default Blogs;