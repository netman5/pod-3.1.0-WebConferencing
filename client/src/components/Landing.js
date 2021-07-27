import React from 'react';
import Navigation from "./Navigation";
import Header from './Header';
import Details from './Details';
import Services from "./Services"
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Landing(props) {
    return (
        <div>
        <Navigation/> 
        <Header/>
        <Details/>
        <Services/>        
        <Footer/>
        <ScrollToTop/>
        </div>
    );
}

export default Landing;