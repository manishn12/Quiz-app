import React from 'react';
import '../App.css';
import Left from './Left';
import Intstruction from './Intstruction';
import Yesterday from './Yesterday';
import Nav from './Nav';
import Footer from './Footer';
import Gmail from './Gmail';

const User = () => {
    return (
        <div className="App">
            <Nav />
            <div className="d-flex flex-sm-row flex-column justify-content-center ">
                <div>
                    <Left />
                </div>
                <div className="right">
                    <Intstruction />
                    <Yesterday />
                    <Gmail />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default User;
