import React from 'react';
import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from './FirbeseConfig';

import { Usercontext } from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig)
const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggingUser , setLogUser] = useContext(Usercontext)
    console.log(loggingUser);
    const handleGoogleBtn = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                const { displayName, email } = result.user;
                const newUser = { name: displayName, email }
                console.log(newUser);
               setLogUser(newUser)
               history.replace(from)
               storeAuthToken()


            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
        }

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(true)
              .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
              }).catch(function (error) {
               
              });
          }
        

    return (

        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-5">
                        <button onClick={handleGoogleBtn}> login with google</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    {/* <img className="img-fluid" src={img} alt="" /> */}
                </div>
            </div>

        </div>


    );
};

export default Login;