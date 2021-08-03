import React from 'react';

const AppoinmentShortList = ({ appoinment }) => {
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Phone</th>
                        <th className="text-secondary" scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       appoinment.map((app)=>
                       <tr>
                           <td>{app.name}</td>
                           <td>{app.phone}</td>
                           <td>{app.email}</td>
                
                       </tr>
                       )
                   }
                </tbody>
            </table>
        </div>
    );
};

export default AppoinmentShortList;