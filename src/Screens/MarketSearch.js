import React from "react";
import "./MarketSearch.css"
import NavBar from "../components/NavBar";
import { Slide } from 'react-slideshow-image';
import { useState,useEffect } from "react";
import 'react-slideshow-image/dist/styles.css'
import WebDrawer from '../Screens/WebDrawer'
import Carousel from 'react-bootstrap/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";

const Data=[
    {
        title:'Graveyard',
        location:'Johar Town',
        block:'B',
        shopname:'Johar Town Graveyard',

        contact:'335465665',
        Avail:'Yes',
        images:[
            require('../Assets/images/graveyard.jpg'), 
            require('../Assets/images/graveyard2.jpg'),],        
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',


    },
    {
        title:'Catering Service',
        shopname:'Abc Catering',
        location:'Model Town',
        block:'C',
        Avail:'Open',

        contact:'335465665',
        images:[
        require('../Assets/images/graveyard.jpg'), 
        require('../Assets/images/graveyard2.jpg'),],
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',



    },
    {
        title:'Coffin market',
        shopname:'Abc Coffin Shop',
        location:'Iqbal Town',
        block:'A',
        Avail:'Open',

        contact:'335465665',
        images:[
        require('../Assets/images/kaffanMarket1.jpg'), 
        require('../Assets/images/kaffanMarket3.jpg'),],
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',


    },
    {
        title:'Graveyard',
        location:'Johar Town',
        Avail:'Yes',
        shopname:'Johar Town Graveyard',


        block:'B',
        images:[
        require('../Assets/images/graveyard.jpg'), 
        require('../Assets/images/graveyard2.jpg'),],
        contact:'335465665',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',


    },
    {
        title:'Catering Service',
        shopname:'Abc Catering',
        location:'Model Town',
        block:'C',
        Avail:'Closed',

        contact:'335465665',
        images:[require('../Assets/images/graveyard.jpg'),
        require('../Assets/images/graveyard2.jpg'), 
        ],
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',



    },
    
]

const MarketSearch = () => {
  const [marketData , setmarketData] = useState([]);
  const [filterd,setFiltered]=useState()
  useEffect(() => {
    setFiltered(marketData);
},[marketData])

const getresult = async () => {
  const response = await axios.get('https://fyp-2022.herokuapp.com/api/markets', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  console.log("Some data here",response.data)
  setmarketData(response.data);

}
useEffect(()=>{
    getresult()
},[])
getresult()
    return (
        <>
        <NavBar />
        <WebDrawer />
            <div className='MarketSearchCover'>
            <div className="MarketSearchHeading">
                <h2>Market Search</h2>
            </div>
            <div className="MarketSearchDetails">

           

                {marketData.map ((Data, index) =>(
               <div className="market-search-data">
                                 <p style={{color: '#02a95c'}}>Category:{Data.type}</p>

                 <p>Contact No:{Data.phone}</p>
                 <p>{Data.location}</p>
                 <p>{Data.block}</p>
                 <p>{Data.name}</p>
                </div>


            )) }
            
            </div>
            </div>
        </>
    )
}
export default MarketSearch