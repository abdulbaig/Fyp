import React from 'react'
import NavBar from '../components/NavBar'
import { useEffect,useState } from 'react'
import "./DonationStatus.css"
import WebDrawer from '../Screens/WebDrawer'
import axios from 'axios'
import { width } from '@mui/system'

const ViewProfile = () => {
   

      // const [donation , setDonation] = useState([])
      const [data, setData] = useState([]);

      // useEffect(()=>{

 
      //   getData()
      // },[])
      //   const getData =  async () =>{
      //     const res =  await axios.get("https://fyp-2022.herokuapp.com/api/donations/")
      //     setDonation(res.data)
      //   }

      useEffect(()=>{
        let token = localStorage.getItem("token")
        console.log(token)
        const getData = async ()=>{
          const res = await axios.get("https://fyp-2022.herokuapp.com/api/userProfile",
          {
            headers:{
              'Content-category': 'application/json',
      
              'x-access-token':token
            }
          })
          setData(res.data)
        }
        getData()
      },[])
    

  return (
    <div>
        <NavBar />
        <WebDrawer />
        
    <div className='donation-status-details'>
        <div style={{border: '2px solid black', width: '40%', minHeight:'50% !important', textAlign:'start', marginLeft:'20%',marginTop:'20%'}}>
        <h3 style={{marginLeft: '40%', paddingtop: '5%'}}>
          Profile
        </h3>
        <div style={{border:'2px solid black', borderRadius: '5px', margin:'5%'}}>
        <p style={{padding:'2%'}}>Name: <span style={{paddingLeft: '10%'}}>{data.username}</span></p>
        <p style={{padding:'2%'}}>Email: <span style={{paddingLeft: '10%'}}>{data.email}</span></p>
        </div>
        </div>
        

           
        </div>
        </div>    
   
    
  )
}

export default ViewProfile