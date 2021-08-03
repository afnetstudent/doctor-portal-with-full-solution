import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AllpationsTable from '../AllpationsTable/AllpationsTable';

const AllPations = () => {
    const [allappoinments, setAllAppoinment] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAllAppoinment(data))
    },[])
    return (
        <div className="container-fluid row">
           <Sidebar></Sidebar>
           <div className="col-md-10 p-4"  style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All patiens</h5>
            <AllpationsTable allappoinments={allappoinments}></AllpationsTable>
           </div>
        </div>
    );
};

export default AllPations;