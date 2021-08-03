import React from 'react';

const DoctorContact = ({doctor}) => {
    return (
        <div className="col-md-4">
            <img className="img-fluid" src={doctor.img} alt="" />
            <h6>{doctor.name}</h6>
            <h6>{doctor.contact}</h6>
        </div>
    );
};

export default DoctorContact;