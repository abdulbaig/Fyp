import React from 'react'
import NavBar from '../components/NavBar'
import { useEffect,useState } from 'react'
import "./DonationStatus.css"
import WebDrawer from '../Screens/WebDrawer'
import axios from 'axios'

const RequestStudentStatus = () => {
   

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
          const res = await axios.get("https://fyp-2022.herokuapp.com/api/whiteCollarRequests",
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
        {/* {donation === 0 ? <p>loading ....</p> :
        donation.map((data) => {
            return(
                <div className='donation-status-main'>

        <div className='donation-status-elements'> Name :{data.name}</div>
  <div className='donation-status-elements'>Phone</div>
  <div className='donation-status-elements'>Email</div>
  <div className='donation-status-elements'>Cnic</div>
  <div className='donation-status-elements'>Category</div>
  

    </div>

            )
        })
    } */}
    <div className='donation-status-details'>
        <h3 style={{ marginBottom: "5%", marginTop: "5%", marginLeft: "35%" }}>
          View Student Request
        </h3>

        {/* <table style={{ marginLeft: "2%", width: "90%" }}>
          <tr style={{ backgroundColor: "#039450", color: "white" }}>
            <th>Name</th>
            <th>Cnic</th>

            <th>Phone</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr> */}
          {data.map((record) => {
            return (
              // <tr style={{ backgroundColor: "grey" }}>
              //   <td>{record.name}</td>
              //   <td>{record.cnic}</td>

              //   <td>{record.phone}</td>
              //   <td>{record.category}</td>
              //   <td>{record.status}</td>
              
              // </tr>
              
              // <p>Name: {record.name} <span style={{paddingLeft: "5%"}}>Cnic: {record.cnic}</span> <span span style={{paddingLeft: "5%"}}>Phone: {record.phone}</span>
              // <span span style={{paddingLeft: "5%"}}>Category: {record.category}</span><span>Status: {record.status}</span>
              // </p>

              <table className='donation-status-th' style={{width:"100%"}}>
  <tr>
    <th>Name:</th>
    <td>{record.full_name}</td>
    
  
    <th>Cnic:</th>
    <td>{record.cnic}</td>
  
    <th>Phone:</th>
    <td>{record.phone}</td>
 
   
  
    <th>Status:</th>
    <td>{record.status}</td>
  </tr>
</table>

            );
          })}
        </div>
        </div>    
   
    
  )
}

export default RequestStudentStatus