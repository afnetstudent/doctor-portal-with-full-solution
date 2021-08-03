import React from 'react';
import chire from '../../../images/Chire.png'

const HeaderMain = () => {
    return (
       <main className="row">
        <div className="col-md-4 offset-md-1">
        <h1>Your new smile <br />  start here </h1>
       <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ab.</p>
       <div className="btn" style={{backgroundColor:'#13D0D1', padding:'10px'}}> Appoinment</div>
        </div>

        <div className="col-md-6">
            <img className="img-fluid" src={chire} alt="" />
        </div>
       </main>
    );
};

export default HeaderMain;