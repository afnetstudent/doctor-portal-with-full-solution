import React from 'react';
import InfoCard from '../InforCard/InfoCard';
import { faClock, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons'
import './info.css';

const BusinessInfo = () => {
    const infoData = [
        {
            title:'Opening Ours',
            Discription: 'lorem dami text here',
            icon: faClock,
            background: 'primary'
        },
        {
            title:'visit Our locantion',
            Discription: 'Broklin NY 10036',
            icon: faMapMarked,
            background: 'dark'
        },
        {
            title:'Contact Now',
            Discription: 'visit Our locantion',
            icon: faPhone,
            background: 'primary'
        }
    
  
    ]
    return (
        <section className="row">
            {
            infoData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;