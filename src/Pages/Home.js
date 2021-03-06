import React from 'react';
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <Countries/>
            <h1>Home</h1>
        </div>
    );
};

export default Home;