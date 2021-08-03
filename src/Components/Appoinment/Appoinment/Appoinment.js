import React, { useState } from 'react';
import Nav from '../../Shared/Nav/Nav';
import Footer from '../../Shared/Footer/Footer';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';

const Appoinment = () => {
    const [selectDate, setSelectDate] = useState(new Date ())
    const handelChange = date  => {
        setSelectDate(date)
        }
    return (
        <div>
            <Nav></Nav>
            <AppoinmentHeader handelChange={handelChange}></AppoinmentHeader>
            <BookAppoinment date={selectDate}></BookAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;