import React from 'react';
import Banner from '../Banner/Banner';

import ApartmentLocation from '../../ApartmentLocation/ApartmentLocation';
import Banner_slid from '../Banner_slid/Banner_slid';
import Banner1 from '../Banner2/Banner1';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import ConstructionSection from '../ConstructionSection/ConstructionSection';
import BuildingDesigns from '../BuildingDesigns/BuildingDesigns';
import Service from '../../Service/Service';
import Contack_page from '../../Contack/Contack';



const Home = () => {
    return (
        <div>
          <Banner_slid></Banner_slid>
           <Banner1></Banner1>   
           <ConstructionSection></ConstructionSection> 
            <Banner></Banner>
            <About></About>
             <Portfolio></Portfolio>
       
             <BuildingDesigns></BuildingDesigns>
             <Service></Service>
            <ApartmentLocation></ApartmentLocation>
            <Contack_page></Contack_page>
        </div>
    );
};

export default Home;