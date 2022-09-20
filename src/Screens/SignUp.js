import React from "react";
import { useState,useEffect } from "react";
import "./Donation.css"
import axios from "axios";
import {useFormik} from "formik"
import * as Yup from "yup";
import "./SignUp.css"
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Link } from "react-router-dom";


const SignUp = () => {
    const [show,setShow]=useState(false);
    const [isOk,setIsOk]=useState(false);

    const [isOpen,setIsOpen]=useState(false);
    const navigate = useNavigate();
    // useEffect(() => {
    //     isOk ?             navigate("/")
    //     : null
    //   },[])
  
      const handleSignUp = async (data) =>{
  
     console.log(data)
    
        try {
          const response = await axios({
            baseURL: 'https://fyp-2022.herokuapp.com/api/auth/register',
            method: 'POST',
            data,
          });
  
          console.log(response.data)
      
  
  
          response ? setIsOk(true) : setIsOk(false)
    
        } catch (error) {
          if(error)
          {
            console.log(error)

  
            setIsOk(false)
            alert('Could not Sign up')
          }
        }
      }


    const formik = useFormik({
        initialValues: {
          username: '',
          email: '',
          password: '',
        },
    
        validationSchema: Yup.object({
          username: Yup.string().max(15, "name must contain 15 letters or less")
          .required("required"),
    
          email: Yup.string().email("invalid email address")
          .required("required"),
    
          password: Yup.string().min(5, "name must contain atleast 5 letters or digits")
          .required("required"),
    
          
        }),
    
        onSubmit: (values) => {
            console.log(values);
            navigate("/");


            setIsOpen(true);
            handleSignUp(values);
          },
        });

        console.log(formik.touched); 

  return (
    <div>
        <div className="signup-main">
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <div className="signup-heading">
            <h2>Sign Up</h2>
        </div>
        <div style={{alignSelf:'center'}}>
        <div className="signup-input-container">
        <input 
        style={{
          width: "250px",
          height: "40px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "2px solid #02a95c",
          paddingLeft: "10px",
        }}
        className="signup-inputs"
        id ="username"
        name= "username"
        type="text"
        placeholder="Create UserName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null }
        </div>

        <div className="signup-input-container">
        <input 
        style={{
          width: "250px",
          height: "40px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "2px solid #02a95c",
          paddingLeft: "10px",
        }}
        className="signup-inputs"
        id ="email"
        name= "email"
        type="mail"
        placeholder="Enter Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p style={{color:"red"}}>{formik.errors.email}</p> : null }
        </div>

        <div className="signup-input-container">
        <input 
        style={{
          width: "250px",
          height: "40px",
          borderWidth: "1px",
          focus: "1px #02a95c",
          borderRadius: "10px",
          border: "2px solid #02a95c",
          paddingLeft: "10px",
        }}
        className="signup-inputs"
        id ="password"
        name= "password"
        type="password"
        placeholder="Create Password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <p style={{color:"red"}}>{formik.errors.password}</p> : null }
        </div>
        </div>

        <div className="signup-button-holder"  onSubmit={formik.handleSubmit}>

        <Button
                
                width='250px'
                height='40px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Register'
                fontWeight='600'
                
                
                />
         </div>

        </form>
        </div>
    </div>
  )
}

export default SignUp

