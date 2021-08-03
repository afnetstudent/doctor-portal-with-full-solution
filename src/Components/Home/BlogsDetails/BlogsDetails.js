import React from 'react';

const BlogsDetails = ({blog}) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="d-flex">
            <img src={blog.img} width="50px" alt="" />
            <h6>{blog.name}</h6>
            </div>
            <h6>{blog.date}</h6>
            <h5>{blog.title}</h5>

        </div>
    );
};

export default BlogsDetails;