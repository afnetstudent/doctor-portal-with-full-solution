import React from 'react';
import chire from '../../../images/Chire.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppoinmentHeader = ({handelChange}) => {
    
    return (
        <main className="row ">
        <div className="col-md-4 offset-md-1">
       <div className="btn" style={{backgroundColor:'#13D0D1', padding:'10px'}}> Appoinment</div>
       <Calendar
        onChange={handelChange}
        value={new Date()}
      />
        </div>

        <div className="col-md-6">
            <img className="img-fluid" src={chire} alt="" />
        </div>
       </main>
    );
};

export default AppoinmentHeader;