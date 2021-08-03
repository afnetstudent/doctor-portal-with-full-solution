import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Nav from '../../Shared/Nav/Nav';
import BusinessInfo from '../BusinessInfo/BusinessInfo'

import './Header.css'


const Header = () => {
    return (
        <div className="container">
            <Nav></Nav>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            <firstInfo></firstInfo>
        </div>
    );
};

export default Header;