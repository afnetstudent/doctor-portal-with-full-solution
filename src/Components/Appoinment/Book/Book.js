import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';


const Book = ({ book, date }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
      setIsOpen(true);
  }
  function closeModal() {
      setIsOpen(false);
  }
    return (
        <div className="col-md-4 mt-5">
            <h6 style={{color:' #1cc7c1'}}>{book.name}</h6>
            <h6>{book.time}</h6>
            <h6>{book.seat}</h6>
            <button onClick={openModal} style={{backgroundColor:' #1cc7c1', color:'white'}}>Book Appoinment</button>
           <AppoinmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appoinmentON={book.name} date={date}></AppoinmentForm>
        </div>
    );
};

export default Book;