import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FooterDetails = ({footer}) => {
    return (
        <div className="col-md-3 mt-5">
          
            <h4 style={{color:'#3A4256'}}>{footer.title}</h4>
            <br/>
            {footer.name}
            {footer.info}
            {footer.info1}
            {footer.info2}
            {footer.info3}
            {footer.info4}
            {footer.info5}
            
            <br/>
            <FontAwesomeIcon className='bg-primary w-25' icon={footer.icon}></FontAwesomeIcon>
            <FontAwesomeIcon className='bg-primary w-25' icon={footer.icon2}></FontAwesomeIcon>
            <FontAwesomeIcon className='bg-primary w-25' icon={footer.icon3}></FontAwesomeIcon>
            <br></br>
            {footer.phone}
        </div>
    );
};

export default FooterDetails;