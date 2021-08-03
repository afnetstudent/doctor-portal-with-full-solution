import React from 'react';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Usercontext } from '../../../App';

const Dashboard = () => {
    const [loggingUser, setLogUser] = useContext(Usercontext)
    const [selectDate, setSelectDate] = useState(new Date ())
    const [appoinment, setappoinment] = useState([])
    const handelChange = date  => {
        setSelectDate(date)
    }
    useEffect(()=>{
        fetch('http://localhost:5000/appoinmentbydate',{
            method:'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date:selectDate, email: loggingUser.email})
        })
        .then(res => res.json())
        .then(data => setappoinment(data))
    },[selectDate])
        


    return (
        <section>
            <div  className="container-fluid row">
                <div className="col-md-2 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handelChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppoinmentByDate appoinment={appoinment}></AppoinmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;