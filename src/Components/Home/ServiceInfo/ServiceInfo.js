import React from 'react';
import dental from '../../../images/dental.png'
import toothFilling from '../../../images/tooth-filling.png'
import tooth from '../../../images/tooth.png'
import ServiceInfoDetail from '../ServiceinfoDetail/ServiceInfoDetail';
console.log(dental);
const ServiceInfo = () => {
    const infoService = [
        {
            img: dental,
            name: 'florida-Treatement'
        },
        {
            img: toothFilling,
            name: 'covity-filing'
        },
        {
            img: tooth,
            name: 'teathwhitenning'
        }
    ]
    return (
        <section className='service-Container '>
            <div className="text-center">
                <h5 style={{ color: 'aqua' }}>Our service </h5>
                <h2>service we Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5 pt-5">
                    {
                        infoService.map(service => <ServiceInfoDetail service={service}></ServiceInfoDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceInfo;