import React from 'react';

const AllpationsTable = ({allappoinments}) => {
    console.log(allappoinments)
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th className="text-secondary text-left" scop="col">Name</th>
                        <th className="text-secondary text-left" scop="col">Gender</th>
                        <th className="text-secondary text-left" scop="col">Age</th>
                        <th className="text-secondary text-left" scop="col">Weight</th>
                        <th className="text-secondary text-left" scop="col">Phone</th>
                        <th className="text-secondary text-left" scop="col">Email</th>
                        <th className="text-secondary text-left" scop="col">Date</th>
                       
                    </tr>
                </thead>
                <tbody>
                       {
                           allappoinments.map((app, index)=> <tr>
                               <td>{index +1}</td>
                               <td>{app.name}</td>
                               <td>{app.age}</td>
                               <td>{app.whight}</td>
                               <td>{app.phone}</td>
                               <td>{app.email}</td>
                               <td>{app.date}</td>

                           </tr>)
                       }
                    
                </tbody>
            </table>

        </div>
    );
};

export default AllpationsTable;