import React from 'react';
import doctorImg from '../../../images/5790-removebg.png'
import './SecandaryContent.css'

const SecondContent = () => {
    return (
        <section className="ms-5 d-flex justify-content-center mt-5 apoinment w-75" >
            <div className="container-section w-75 h-50 d-inline-block " style={{ backgroundColor: '#3A4256' }}>

                <div className="row ">
                    <div className="col-md-5">
                        <img  src={doctorImg} width="300px" alt="" />
                    </div>
                    <div className="col-md-7">
                        <h5 className="text-uppercase text-primary mt-5">appoinment</h5>
                        <h1 className="text-white">Make an appoinment <br /> Today</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ducimus harum, sequi  tempore.</p>
                        <bt className="btn btn-primary "> Learn More</bt>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default SecondContent;