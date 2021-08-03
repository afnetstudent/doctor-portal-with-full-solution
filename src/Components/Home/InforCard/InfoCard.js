import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 ">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className="m-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.Discription}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;