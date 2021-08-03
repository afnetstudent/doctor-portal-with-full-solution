import React from 'react';

import { faFacebookSquare, faTwitterSquare, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faCoffee,  } from '@fortawesome/free-solid-svg-icons'
import FooterDetails from '../../Home/FooterDetails/FooterDetails';

const Footer = () => {
    const foterData = [
        {
            name: 'Emargency Dental Care',
            info1: 'check-up',
            info2: 'Treatment of professional diseases',
            info3: 'Tooth Extraction',
        },
        {
            title: 'Service',
            info: 'check-up',
            info1: 'Treatment of professional diseases',
            info2: 'Tooth Extraction',
            info3: 'Tooth Extraction',
            info4: 'Tooth Extraction',
            info5: 'Tooth Extraction',

        },
        {
            title: 'Oral-Health',
            info: 'check-up',
            info1: 'Treatment of professional diseases',
            info2: 'Tooth Extraction',
            info3: 'Tooth Extraction',
            info4: 'Tooth Extraction',
            info5: 'Tooth Extraction',

        },
        {
            title: 'Our Addresh',
            info: 'Patiya shantirhut',
            icon: faFacebookSquare,
            icon2: faGoogle,
            icon3: faTwitterSquare,
            phone: '0120204240',

            
           
            

        },
    ]
    return (
        <div className="row m-5" style={{ color:'gray'}}>
            {
                foterData.map(footer => <FooterDetails footer={footer}></FooterDetails> )
            }
        </div>
    );
};

export default Footer;