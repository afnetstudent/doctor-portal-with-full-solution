import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setinfo] = useState({})
    const [file, setfile] = useState(null)
    const handleBluer = e => {
        const newinfo = { ...info };
        newinfo[e.target.name] = e.target.value;
        setinfo(newinfo)
    }
    const handelChange = (e) => {
        const newfile = e.target.files[0];
        setfile(newfile)
    }
    const handleSubmit = () => {
        const formData = new FormData()
       
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5000/adddoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid-row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBluer} type="email" class="form-control" name="email" placeholder="Enter email" />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBluer} type="text" class="form-control" name="name" placeholder="name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload image</label>
                        <input onChange={handelChange} type="file" class="form-control mt-2" placeholder="picture" />
                    </div>

                    <button type="submit" class="btn btn-primary mt-2">Submit</button>
                </form>
            </div>


        </section>
    );
};

export default AddDoctor;