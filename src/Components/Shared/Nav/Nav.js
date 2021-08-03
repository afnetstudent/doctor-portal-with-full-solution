import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li ><a class="nav-link m-2  " aria-current="page" href="#" >Home</a></li>
                        <li><a class="nav-link m-2" href="#">About</a></li>
                        <Link to="/adddoctor"><li><a class="nav-link m-2 text-white" href="#">
                            <span style={{color:'gray'}}>admin</span></a></li></Link>
                            <Link to="/dashboard"><li><a class="nav-link m-2 text-white" href="#">
                            <span style={{color:'gray'}}>Dashboard</span></a></li></Link>
                        <li> <a class="nav-link m-2" href="#">Dental-service</a></li>
                        <li><a class="nav-link m-2 text-white " href="#">Review</a></li>
                        <li> <a class="nav-link m-2 text-white" href="#">Blog</a></li>
                        <li><a class="nav-link m-2 text-white" href="#">Contact</a></li>
                       

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;