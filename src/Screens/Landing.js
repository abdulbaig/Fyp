import React from 'react'
import homeImage from '../Assets/images/homeImage.png';
import Button from '../components/Button';
import Card from '../components/Card';
import BrandName from '../components/BrandName';
import './Home.css';
import LandingNav from './LandingNav';




const Landing = () => {
    return (
        <>
            
           <LandingNav />

           <div className='row container-fluid home-banner'>

               <div className='col'>
                <div className='home-banner-text'>
               <h1>
                Trusted fundraising for all of life's moments
               </h1>
               <h4>
               Get help. Give kindness. Start in just 5 minutes.
               </h4>
                <div className='home-banner-button'>
                <Button 
                width='14vw'
                height='7vh'
                backgroundColor= '#02a95c'
                color= '#fafcf8'
                borderRadius= '5px'
                border= '1px solid'
                borderColor= '#02a95c'
                buttonName='Start a Community Assist'
                fontWeigh= '800'
                />
                </div>
               </div>
               </div>

               <div className='col'>
                
                <img className='banner-img' src={homeImage}/>
                
               </div>

               

            
           </div>

           {/* <div className='container home-top-fundraisers'>
               <div className='container row-fundraisers'>
                <h3>
                Top fundraisers
                </h3>
                </div>
                </div>

            <Card /> */}
                

                
            
           
        
        </>
    )
}
export default Landing
