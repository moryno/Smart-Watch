import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import HomeCard from '../components/HomeCard';


const Home = () => {
    return ( 
        <div className='home-container'>
            <Navbar />
            <HomeCard />
        </div>
    );
}
 
export default Home;