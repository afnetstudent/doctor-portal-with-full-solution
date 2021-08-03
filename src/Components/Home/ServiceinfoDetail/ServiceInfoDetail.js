import React from 'react';

const ServiceInfoDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center ' style={{height:'120px'}}>
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h6 className="mt-3 mb-3"> Name {service.name}</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, modi.
            </p>
        </div>
    );
};

export default ServiceInfoDetail;