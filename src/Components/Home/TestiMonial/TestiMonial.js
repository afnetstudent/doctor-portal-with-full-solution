import React from 'react';
import TestMonialDetail from '../TestMonialDetail/TestMonialDetail';
import tesmonPic from '../../../images/Ellipse 1.png'
import tesmonPic2 from '../../../images/Ellipse 2.png'
import tesmonPic3 from '../../../images/Ellipse 3.png'

const TestiMonial = () => {
    const testMonial = [
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedim molestiae consectetur voluptatum harum repudiandae tenetur itaque.',
            name: 'Winson Hery',
            img: tesmonPic,
            location: 'Califonia'
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedim molestiae consectetur voluptatum harum repudiandae tenetur itaque.',
            name: 'Winson Hery',
            img: tesmonPic2,
            location: 'Califonia'
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedim molestiae consectetur voluptatum harum repudiandae tenetur itaque.',
            name: 'Winson Hery',
            img: tesmonPic3,
            location: 'Califonia'
        }
    ]
    return (
        <section className=" mt-5 ms-5 w-75 ">
            <div>
                <div className="ms-5">
                    <div className="text-primary ">Testi Monial</div>
                    <h1>Whats Your petients <br /> says</h1>
                </div>
                <div className="row mt-5 ms-5">
                {
                       testMonial.map(testmn => <TestMonialDetail testmn={testmn}></TestMonialDetail> )
                }
                </div>
            </div>
        </section>
        
    );
};

export default TestiMonial;