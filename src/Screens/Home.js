import React from "react";
import NavBar from "../components/NavBar";
import './Home.css';
import HomeImage1 from "../Assets/images/HomeImage1.jpg"
import { Link } from "react-router-dom";
import Footer from './Footer'
import WebDrawer from '../Screens/WebDrawer'
import HomeFooter from "./HomeFooter";

const Sdata = [
    {
      id: 1,
    image: {HomeImage1},
      title: 'Submit Funds',
      image: require ("../Assets/images/HomeImage1.jpg")
        
    },
    {
      id: 2,
        title: 'Request Funds',
        image: require ("../Assets/images/HomeImage2.jpg")
          
      },
      {
        id: 3,
        title: 'Market Search',
        image: require ("../Assets/images/HomeImage3.jpg")
          
      },

   
]

const Home = () => {

   
    return (
        <>
    <NavBar />
    <WebDrawer />
    <div className="container-fluid Home-Main">
      
    <div className="cardd home-card">
   
         {Sdata.map (data =>(
<div className="card-body home-card-body">
<Link to={data.id==2?'RequestFund':'' || data.id==1?'Donation':'' || data.id==3?'MarketSearch':''}>
<img className="img-top Home-Image-1" src={data.image} /> 
{/* <h5 className="card-title home-card-title">{data.title}</h5> */}
<button
           
            style={{
                width: '200px',
                height: '35px',
                backgroundColor: '#006e3b',
                color: '#fafcf8',
                borderRadius: '5px',
                border: '2px solid white'
                
            }
        }
            className="submit-button"
            
        
        >
        
        {data.title}
            
        </button>
</Link>

</div>


)) }

</div>

</div>
<HomeFooter />
 </>
    )
}
export default Home
