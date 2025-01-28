import React from 'react';
import Banner from '../Banner/Banner';

import ApartmentLocation from '../../ApartmentLocation/ApartmentLocation';
import Banner_slid from '../Banner_slid/Banner_slid';
import Banner1 from '../Banner2/Banner1';



const Home = () => {
    return (
        <div>
          <Banner_slid></Banner_slid>
           <Banner1></Banner1>    
            <Banner></Banner>
            <ApartmentLocation></ApartmentLocation>
        </div>
    );
};

export default Home;