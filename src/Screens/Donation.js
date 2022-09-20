import NavBar from "../components/NavBar";
import React from "react";
import Button from "../components/Button";
import "./Donation.css"
import { Link } from "react-router-dom";
import axios from "axios";
import {useFormik} from "formik"
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import MuiSelect from "../components/MuiSelect";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@material-ui/core/TextField";
import StatusDrawer from "./StatusDrawer";
import WebDrawer from '../Screens/WebDrawer'





const Donation = () => {

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


  const navigate = useNavigate();


  const DonateFund = async (a,b,c,d,e)=>{
    console.log(a,b,c,d,e)
    const response = await axios.post('https://fyp-2022.herokuapp.com/api/donations',
    {
      "category":a,
      "name":b,
      "email":c,
      "cnic":d,
      "phone":e
    },
    {
      headers: {
        'Content-category': 'application/json',
      }}
    
    )
  console.log(response.data)
}


  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      cnic: '',
      category : '',
      // amount: (Number),
    },

    validationSchema: Yup.object({
      name: Yup.string().max(15, "name must contain 15 letters or less")
      .required("required"),

      phone: Yup.string().length(10, "phone must contain 11 digits")
      .required("required"),

      email: Yup.string().email("invalid email address")
      .required("required"),

      cnic: Yup.string().max(13, "name must contain 13 letters or less")
      .required("required"),

      cnic: Yup.number().min(2, "amount must be atleast in hundreds")
      .required("required"),

      
    }),

    onSubmit: (values) => {
      console.log(values);
      DonateFund(values.category,values.name,values.email,values.cnic,values.phone);
      navigate("/Home/DonationStep2");
    },
  });
  console.log(formik.touched); 
  return (
    <> 
      <NavBar />
      <WebDrawer />
      <div className="Donation-1-main">
      <form className="donation-1-form" onSubmit={formik.handleSubmit}>
        <div className="input-container">
        <input 
        style={{
          width: "300px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="donaton-1-inputs"
        id ="name"
        name= "name"
        type="text"
        placeholder="FirstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <p style={{color:"red"}}>{formik.errors.name}</p> : null }
        </div>

        <div className="input-container">
        <input 
        style={{
          width: "300px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="donaton-1-inputs"
        id ="phone"
        name= "phone"
        type="number"
        placeholder="Phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        />
        {formik.touched.name && formik.errors.phone ? <p style={{color:"red"}}>{formik.errors.phone}</p> : null }

        </div>

        <div className="input-container">
        <input 
        style={{
          width: "300px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="donaton-1-inputs"
        id ="email"
        name= "email"
        type="tel"
        placeholder="Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        {formik.touched.name && formik.errors.email ? <p style={{color:"red"}}>{formik.errors.email}</p> : null }

        </div>

        <div className="input-container">
        <input 
        style={{
          width: "300px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="donaton-1-inputs"
        id ="amount"
        name= "amount"
        type="number"
        placeholder="Enter Amount"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.amount}
        />
        {formik.touched.amount && formik.errors.amount ? <p style={{color:"red"}}>{formik.errors.amount}</p> : null }

        </div>

        <div className="input-container">
        <input 
        style={{
          width: "300px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="donaton-1-inputs"
        id ="cnic"
        name= "cnic"
        type="tel"
        placeholder="Cnic"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cnic}
        />
        {formik.touched.name && formik.errors.cnic ? <p style={{color:"red"}}>{formik.errors.cnic}</p> : null }

        </div>

       

        <FormControl variant="standard" sx={{ m: 1, minWidth: 140, maxHeight: '50px' , marginBottom: '5%' }}>
        <InputLabel id="demo-simple-select-standard-label">Select Category</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id ="category"
          name= "category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Age"
        >
          
          <MenuItem           value={'janaza fund'}>Janaza Fund</MenuItem>
          <MenuItem           value={'student fund'}>Student Fund</MenuItem>  


          
        </Select>
      </FormControl>




        <br></br>
        <div onSubmit={formik.handleSubmit}>

        <Button 
                
                width='300px'
                height='35px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Confirm'
               
                
                />
         </div>
      </form>
      </div>
    </>
  );
};
export default Donation;
