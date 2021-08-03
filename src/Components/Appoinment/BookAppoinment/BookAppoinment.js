import React from 'react';
import Book from '../Book/Book';


const BookAppoinment = ({date}) => {
    
    const BookData = [
        {
            name:'Teeth Orthodntics',
            time : '8:00 am - 9:00 am',
            seat: '10 space avaiable',
            id: 1
        },

        {
            name:'Cosmetic Dentistry',
            time : '10:05 am - 11:30 am',
            seat: '10 space avaiable',
            id: 2
        },
        {
            name:'Teeth Cleaning',
            time : '5:00 pm - 6:30 pm',
            seat: '10 space avaiable',
            id: 3
        },
        {
            name:'Teeth Cleaning',
            time : '5:00 pm - 6:30 pm',
            seat: '10 space avaiable',
            id: 4
        },
        {
            name:'Teeth Cleaning',
            time : '5:00 pm - 6:30 pm',
            seat: '10 space avaiable',
            id: 5

        },
        {
            name:'Teeth Cleaning',
            time : '5:00 pm - 6:30 pm',
            seat: '10 space avaiable',
            id: 6
        },
    ]
    return (
        <section className=" text-center mt-5">
        <h3 style={{color:' #1cc7c1'}}>
            avaiable Appoinment on february {date.toDateString()}
        </h3>
        <div className="row">
            {
                BookData.map(book => <Book book={book} key={book.id} date={date}></Book>)
            }
        </div>
        </section>
    );
};

export default BookAppoinment;