import NavBar from "../components/NavBar";
import React from "react";
import Button from "../components/Button";
import "./RequestJanazaFund.css"
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
import { Navbar } from "react-bootstrap";

const RequestJanazaFund = () => {

  const navigate = useNavigate();

  const JanazaFund = async (values) => {
    console.log(values)
    const response = await axios.post('https://fyp-2022.herokuapp.com/api/janazaRequests',
      values, {
     headers: {
        'Content-category': 'application/json',
      }

    })
    console.log(response.data)
  }

 

  const formik = useFormik({
    initialValues : {
              name: "",
              cnic: "",
              phone: "",
              email: "",
              relation: "",
              dName: "",
              dCnic: "",
              age: "",
              birthDate: "",
              deathDate: "",

              address: "",
              gender: "",
              amount: ""
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().min(4).required("Name is required").label("Name"),
      dName: Yup.string().min(4).required("Name is required").label("Name"),
  
      cnic: Yup.string().min(13).length(13)
      .required("CNIC is required")
      .label("CNIC No"),
      dCnic:Yup.string().min(13).length(13)
      .required("CNIC is required")
      .label("CNIC No"),
      phone:Yup.string().min(11).max(11).length(11)
      .required("Phone is required")
      .label("Phone"),
      email: Yup.string()
        .required("Email is required")
        .label("email"),
      relation: Yup.string()
        .required("Relation is required")
        .label("relation"),
      age: Yup.string()
        .required("Age is required")
        .label("age"),
  
      address: Yup.string()
        .required("Please Enter Deceased Person Address")
        .label("address"),
      // birthDate: Yup.string()
      // .required("Please Enter Deceased Person Address")
      // .label("birthDate"),
      // deathDate: Yup.string()
      // .required("Please Enter Deceased Person Address")
      // .label("deathDate"),
      gender: Yup.string()
        .required("Please Select Gender"),
      amount: Yup.string()
        .required("Please Enter Request Amount")
  
  
  
    }),

  onSubmit: (values) => {
    console.log(values);
    JanazaFund(values);
    navigate("/Home");

   
  },

  })

  console.log(formik.touched);

  return (
    <> 
      <Navbar/>
      <div className="request-janaza-main">
      <form className="request-janaza-form" onSubmit={formik.handleSubmit}>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="name"
        name= "name"
        type="text"
        placeholder="FirstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.name}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="cnic"
        name= "cnic"
        type="text"
        placeholder="Enter Cnic"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cnic}
        />
        {formik.touched.cnic && formik.errors.cnic ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.cnic}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="phone"
        name= "phone"
        type="tel"
        placeholder="Enter Phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.phone}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="email"
        name= "email"
        type="mail"
        placeholder="Enter Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.email}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="relation"
        name= "relation"
        type="text"
        placeholder="Enter Relation"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.relation}
        />
        {formik.touched.relation && formik.errors.relation ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.relation}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="dName"
        name= "dName"
        type="text"
        placeholder="Enter Deceased Person Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dName}
        />
        {formik.touched.dName && formik.errors.dName ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.dName}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="dCnic"
        name= "dCnic"
        type="tel"
        placeholder="Enter Deceased Person Cnic"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.dCnic}
        />
        {formik.touched.dCnic && formik.errors.dCnic ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.dCnic}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="age"
        name= "age"
        type="tel"
        placeholder="Enter Age"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.age}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="birthDate"
        name= "birthDate"
        type="text"
        placeholder="Enter Birth Date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.birthDate}
        />
        {formik.touched.birthDate && formik.errors.birthDate ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.birthDate}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="deathDate"
        name= "deathDate"
        type="text"
        placeholder="Enter Death Date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.deathDate}
        />
        {formik.touched.deathDate && formik.errors.deathDate ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.deathDate}</p> : null }
        </div>

        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
        }}
        className="request-janaza-inputs"
        id ="address"
        name= "address"
        type="text"
        placeholder="Enter Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.address}</p> : null }
        </div>

        <div className="request-janaza-dropdown">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Select Gender</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id ="gender"
          name= "gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          label="Gender"
        >
          
          <MenuItem           value={'Male'}>Male</MenuItem>
          <MenuItem           value={'Female'}>Female</MenuItem>  


          
        </Select>
        </FormControl>

      </div>
        <div className="request-janaza-input-container">
        <input 
        style={{
          width: "250px",
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "10px",
          
        }}
        className="request-janaza-inputs"
        id ="amount"
        name= "amount"
        type="number"
      
        placeholder="Enter Required Amount"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.amount}
        />
        {formik.touched.amount && formik.errors.amount ? <p style={{color:"red", marginTop: "-3%"}}>{formik.errors.amount}</p> : null }
        </div>
        

     
      <div onSubmit={formik.handleSubmit}>

      <div className="request-janaza-button">
      <Button
                
                width='85px'
                height='32px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Submit'
                />
                </div>
                </div>
                </form>

      </div>
    </>
  );
};
export default RequestJanazaFund;