import React from 'react';
import AppoinmentShortList from '../AppoinmentShortList/AppoinmentShortList';

const AppoinmentByDate = ({appoinment}) => {
    console.log(appoinment);
    return (
        <div>
            <h1>appoinment {appoinment.length}</h1>
        {
            appoinment.length ?
            <AppoinmentShortList appoinment={appoinment}></AppoinmentShortList>
            :
            <div className="p-5">
                <h4>No appoinments here </h4>
            </div>
        }
        </div>
    );
};

export default AppoinmentByDate;