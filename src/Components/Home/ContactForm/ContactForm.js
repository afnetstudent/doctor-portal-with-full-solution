import React from 'react';

const ContactForm = () => {
    return (
        <div className="d-flex justify-content-center w-75 ms-5 mt-5" style={{backgroundColor:'#3A4256'}}>
            <form className="mt-5">
                <h1 className="text-center">Contact Us</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted ">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group ">
                    <label for="exampleInputPassword1">Subject</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Subject" />
                </div>
                <div>
                <label for="exampleInputPassword1">Massage</label>
                <input type="text" class="form-control" style={{height:"200px"}} id="exampleInputPassword1" placeholder="Your Massage" />
                </div>

                <button  type="submit" class="btn btn-primary mt-3 ">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;