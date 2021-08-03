import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appoinment from './Components/Appoinment/Appoinment/Appoinment';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AllPations from './Components/AllPations/Allpations/AllPations';
import AddDoctor from './Components/AddDoctor/AddDoctor/AddDoctor';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';



export const Usercontext = createContext();



function App() {
 const [loggingUser, setLogUser] = useState({})
  return (
    <Usercontext.Provider value={[loggingUser, setLogUser]}>
     
   <Router>
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route path="/appoinment">
         <Appoinment></Appoinment>
       </Route>
       <PrivateRoute path="/dashboard">
         <Dashboard/>
       </PrivateRoute>
       <Route path="/allappoinment">
          <AllPations/>
       </Route>
       <Route path="/login">
          <Login/>
       </Route>
       <PrivateRoute path="/adddoctor">
         <AddDoctor></AddDoctor>
       </PrivateRoute>
     </Switch>
   </Router>
   </Usercontext.Provider>
  );
}

export default App;
