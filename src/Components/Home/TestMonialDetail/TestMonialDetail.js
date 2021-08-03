import React from 'react';

const TestMonialDetail = ({ testmn }) => {
    return (
        <div className="col-md-4">
            <h6 style={{color:'gray'}}>{testmn.title}</h6>
            <div className="d-flex mt-5">
                <div>
                   
                    <img src={testmn.img} alt="" />
                </div>
                <div className="ms-2">
                <h6 style={{color:'aqua'}}>{testmn.name}</h6>
                    <h6 style={{color:'gray'}}>{testmn.location}</h6>
                </div>
            </div>
        </div>
    );
};

export default TestMonialDetail;