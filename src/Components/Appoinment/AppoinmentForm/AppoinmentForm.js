import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppoinmentForm = ({ modalIsOpen, closeModal, appoinmentON, date }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appoinmentON;
        data.date = date;
        data.created = new Date;
       fetch('http://localhost:5000/addappoinment',{
           method:'POST',
           headers: { 'content-type': 'application/json' },
           body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(success => {
           if(success){
            closeModal();
                
           }
       })

    }  


    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center" style={{ color: ' #1cc7c1', }}>{appoinmentON}</h2>
                <p className="text-center">{date.toDateString()}</p>

                <form onSubmit={handleSubmit(onSubmit)}>


                    <input className="m-2 w-100" defaultValue="name"{...register("name")} />
                    <br />
                    <input className="m-2 w-100" defaultValue="phone"  {...register("phone")} />
                    <br />
                    <input className="m-2 w-100" defaultValue="email" {...register("email")} />

                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />


                    

                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender", { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                        <input className="m-2" defaultValue="age" type="number" {...register("age")} placeholder="age"/>
                        </div>

                        <div className="col-4">
                        <input className="m-2" defaultValue="whight" type="number" {...register("whight")} placeholder="Whight" />
                        </div>

                    </div>
                    <input type="submit" style={{ backgroundColor: '#1cc7c1' }} />
                </form>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;
