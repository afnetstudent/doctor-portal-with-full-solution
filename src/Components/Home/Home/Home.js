import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Blogs from '../Blogs/Blogs';
import ContactForm from '../ContactForm/ContactForm';
import Doctors from '../Dotors/Doctors';
import FirstContent from '../FirstContent/FirstContent';
import Header from '../Header/Header';
import SecondContent from '../SecondContent/SecondContent';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import TestiMonial from '../TestiMonial/TestiMonial';


const Home = () => {
    return (
        <div>
          <Header></Header>
          <ServiceInfo></ServiceInfo>
          <FirstContent></FirstContent>
          <SecondContent></SecondContent>
          <TestiMonial></TestiMonial>
          <Blogs></Blogs>
          <Doctors></Doctors>
          <ContactForm></ContactForm>
         <Footer></Footer>
          
        </div>
    );
};

export default Home;