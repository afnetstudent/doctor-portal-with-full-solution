import React from 'react';
import DoctorContact from '../DoctorContact/DoctorContact';
import sahid from '../../../images/doctor.sakib.jpg'
import sakib from '../../../images/doctor.sakib.jpg'
import razib from '../../../images/doctor-razib.jpg'

const Doctors = () => {
    const doctorsInfo =[
        {   
            img: sahid,
            name: 'Sahid',
            contact: '0157573903'
        },
        {
            img: sakib,
            name: 'Sakib',
            contact: '+134959594'
        },
        {
            img: razib,
            name: 'Razib',
            contact: '0182432343'
            
        },

    ]
    return (
        <div className="row mt-5 ms-5 w-75 ">
            {
                doctorsInfo.map(doctor => <DoctorContact doctor={doctor}></DoctorContact>)
            }
        </div>
    );
};

export default Doctors;