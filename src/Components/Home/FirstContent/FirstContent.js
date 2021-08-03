import React from 'react';
import doctorImg from '../../../images/Mask Group 3.png'

const FirstContent = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="mt-5 ms-5">
                <img src={doctorImg} width="300px" alt="" />
            </div>
            <div className="mt-5 ms-5">
               <h1>Exceptional Dental <br /> Care on Your Term</h1>
               <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Earum ratione animi facilis <br /> quisquam voluptates quis.
               Lorem ipsum dolor sit, <br /> amet consectetur adipisicing elit. Libero mollitia possimus recusandae odio consectetur <br /> culpa placeat ut at aperiam officia repudiandae porro voluptate neque, <br /> assumenda ullam tempora delectus, sapiente iste.
               </p>
               <button style={{backgroundColor:'#14D1C9', padding:'10px', width:'120px', height:'40px'}}>Lear More</button>
            </div>
        </div>
    );
};

export default FirstContent;