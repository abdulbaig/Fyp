import NavBar from "../components/NavBar";
import React from "react";
import Button from "../components/Button";
import "./RequestStudentFund.css"
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
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const Donation = () => {

  const navigate = useNavigate();

  const whiteCollar = async (values)=>{
    console.log(values)
    const response = await axios.post('https://fyp-2022.herokuapp.com/api/whiteCollarRequests',
    
    {
     "full_name": values.full_name,
    "uni_name": values.uni_name,
    "program": values.program,
    "cnic": values.cnic,
    "age":  values.age,
    "phone":values.phone,
    "email": values.email,
    "address": values.address,
    "gender": values.gender,
    "fName": values.fName,
    "fCnic": values.fCnic,
    "company_name": values.company_name,
    "gross_monthly_income": values.gross_monthly_income,
    "matric_year": values.matric_year,
    "matric_institute": values.matric_institute,
    "matric_expenses": values.matric_expenses,
    "intermediate_year": values.intermediate_year,
    "intermediate_institute":values.intermediate_institute,
    "intermediate_expenses": values.intermediate_expenses,
    "family_members": values.family_members,
    "earning_hands": values.earning_hands,
    "studying_siblings": values.studying_siblings,
    "total_expenditure": values.total_expenditure,
    "amount":values.amount,
    "status": "Pending",
    }, 
    {
      headers: {
        'Content-category': 'application/json',
      }
    
  })
  console.log(response.data)
}

 

  const formik = useFormik({
    initialValues : {
              full_name: "",
              uni_name: "",
              program: "",
              cnic: "",
              age: "",
              phone: "",
              email: "",
              address: "",
              gender: "",

              father: "",
              fName: "",
              fCnic: "",
              company_name: "",
              gross_monthly_income: "",

              matric_year: "",
              matric_institute: "",
              matric_expenses: "",
              intermediate_year: "",
              intermediate_institute: "",
              intermediate_expenses: "",

              family_members: "",
              earning_hands: "",
              studying_siblings: "",
              total_expenditure: "",
              amount: "",



    },

    validationSchema: Yup.object().shape({
        full_name: Yup.string().min(4).required("Name is required").label("full_name"),
        fName: Yup.string().min(4).required("Name is required"),

        cnic: Yup.string().min(13).length(13)
        .required("CNIC is required")
        .label("CNIC No"),
            fCnic: Yup.string().min(13).length(13)
            .required("CNIC is required")
            .label("CNIC No"),
        phone:Yup.string().min(11).max(11).length(11)
        .required("Phone is required")
        .label("Phone"),
        email: Yup.string()
            .required("Email is required")
            .label("email"),

        age: Yup.string()
            .required("Age is required")
            .label("age"),
      

        address: Yup.string()
            .required("Please Enter Present Address")
            .label("address"),
           
            uni_name: Yup.string()
            .required("Please Enter University Name")
            .label("uni_name"),
            program: Yup.string()
            .required("Please Enter Degree/Program")
            .label("program"),
       
      
            gross_monthly_income: Yup.string()
            .required("Please Enter income")
            .label("income"),
            company_name: Yup.string()
            .required("Please Enter Company Name")
            .label("company"),
            // academic
            matric_year: Yup.string()
            .required("Please Enter matric year"),
            matric_institute: Yup.string()
            .required("Please Enter matric institute"),
            matric_expenses: Yup.string()
            .required("Please Enter matric expenses")
            .label("matric_expenses"),
            intermediate_year: Yup.string()
            .required("Please Enter intermediate year")
            .label("intermediate_year"),
            intermediate_institute: Yup.string()
            .required("Please Enter intermediate institute")
            .label("intermediate_institute"),
            intermediate_expenses: Yup.string()
            .required("Please Enter intermediate expenses")
            .label("intermediate_expenses"),
            // family
            family_members: Yup.string()
            .required("Please Enter family members")
            .label("family_members"),
            earning_hands: Yup.string()
            .required("Please Enter earning hands")
            .label("earning_hands"),
            studying_siblings: Yup.string()
            .required("Please Enter studying siblings")
            .label("studying_siblings"),
            total_expenditure: Yup.string()
            .required("Please Enter total expenditure")
            .label("total_expenditure"),



        gender: Yup.string()
            .required("Please Select Gender"),
            amount: Yup.string()
            .required("Please Enter Request Amount")




    }),
    onSubmit: (values) => {
      console.log(values);
      whiteCollar(values)

    },

})

const style = {
  position: 'absolute',
  width: '35% !important',
  height: '60% !important',
  top: '50%',
  left: '57%',
  transform: 'translate(-50%, -50%)',
  
  bgcolor: 'background.paper',
  border: '2px solid #02a95c',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(formik.touched);

  return (
    <> 
      <Navbar/>
      <div className="request-janaza-main">
      <form className="request-janaza-form" onSubmit={formik.handleSubmit}>
      <p className="request-student-subHeadings">Applicant Details</p>
        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="full_name"
        name= "full_name"
        type="text"
        placeholder="Enter Full Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.full_name}
        />
        {formik.touched.full_name && formik.errors.full_name ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.full_name}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="uni_name"
        name= "uni_name"
        type="text"
        placeholder="Enter Uni Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.uni_name}
        />
        {formik.touched.uni_name && formik.errors.uni_name ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.uni_name}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="program"
        name= "program"
        type="text"
        placeholder="Enter Program"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.program}
        />
        {formik.touched.program && formik.errors.program ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.program}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="cnic"
        name= "cnic"
        type="text"
        placeholder="Enter Cnic"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cnic}
        />
        {formik.touched.cnic && formik.errors.cnic ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.cnic}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="age"
        name= "age"
        type="text"
        placeholder="Enter Age"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.age}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="phone"
        name= "phone"
        type="text"
        placeholder="Enter Phone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.phone}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="email"
        name= "email"
        type="text"
        placeholder="Enter Email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.email}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="address"
        name= "address"
        type="text"
        placeholder="Enter Address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        />
        {formik.touched.address && formik.errors.address ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.address}</p> : null }
        </div>
        
        <div className="request-student-gender">
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

        <p className="request-student-subHeadings">Father Details</p>
        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="fName"
        name= "fName"
        type="text"
        placeholder="Enter Father Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fName}
        />
        {formik.touched.fName && formik.errors.fName ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.fName}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="fCnic"
        name= "fCnic"
        type="text"
        placeholder="Enter Father Cnic"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.fCnic}
        />
        {formik.touched.fCnic && formik.errors.fCnic ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.fCnic}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="company_name"
        name= "company_name"
        type="text"
        placeholder="Enter Company Name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.company_name}
        />
        {formik.touched.company_name && formik.errors.company_name ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.company_name}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="gross_monthly_income"
        name= "gross_monthly_income"
        type="text"
        placeholder="gross_monthly_income"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gross_monthly_income}
        />
        {formik.touched.gross_monthly_income && formik.errors.gross_monthly_income ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.gross_monthly_income}</p> : null }
        </div>

        <p className="request-student-subHeadings">Academic Details</p>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="matric_year"
        name= "matric_year"
        type="text"
        placeholder="Enter Matric Year"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.matric_year}
        />
        {formik.touched.matric_year && formik.errors.matric_year ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.matric_year}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="matric-institute"
        name= "matric_institute"
        type="text"
        placeholder="Enter Matric Institute"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.matric_institute}
        />
        {formik.touched.matric_institute && formik.errors.matric_institute ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.matric_institute}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="matric_expenses"
        name= "matric_expenses"
        type="text"
        placeholder="Enter Matric Expenses"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.matric_expenses}
        />
        {formik.touched.matric_expenses && formik.errors.matric_expenses ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.full_name}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="intermediate_year"
        name= "intermediate_year"
        type="text"
        placeholder="Enter Intermediate Year"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.intermediate_year}
        />
        {formik.touched.intermediate_year && formik.errors.intermediate_year ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.intermediate_year}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="intermediate_institute"
        name= "intermediate_institute"
        type="text"
        placeholder="Enter Institute"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.intermediate_institute}
        />
        {formik.touched.intermediate_institute && formik.errors.intermediate_institute ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.intermediate_institute}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="intermediate_expenses"
        name= "intermediate_expenses"
        type="text"
        placeholder="Enter Intermediate Expenses"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.intermediate_expenses}
        />
        {formik.touched.intermediate_expenses && formik.errors.intermediate_expenses ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.intermediate_expenses}</p> : null }
        </div>

        <p className="request-student-subHeadings">Family Details</p>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="family_members"
        name= "family_members"
        type="text"
        placeholder="Enter Family Members"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.family_members}
        />
        {formik.touched.family_members && formik.errors.family_members ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.family_members}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="earning_hands"
        name= "earning_hands"
        type="text"
        placeholder="Enter Earning Hands"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.earning_hands}
        />
        {formik.touched.earning_hands && formik.errors.earning_hands ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.earning_hands}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="studying_siblings"
        name= "studying_siblings"
        type="text"
        placeholder="Enter Studying Sublings"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.studying_siblings}
        />
        {formik.touched.studying_siblings && formik.errors.studying_siblings ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.studying_siblings}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="total_expenditure"
        name= "total_expenditure"
        type="text"
        placeholder="Enter Total Expenditure"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.total_expenditure}
        />
        {formik.touched.total_expenditure && formik.errors.total_expenditure ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.total_expenditure}</p> : null }
        </div>

        <div className="request-student-input-container">
        <input 
        style={{
          height: "35px",
          borderWidth: "1px",
          focus: "2px #6200ee",
          borderRadius: "10px",
          border: "1px solid lightgrey",
          paddingLeft: "20px",
        }}
        className="request-student-inputs"
        id ="amount"
        name= "amount"
        type="text"
        placeholder="Enter Requested Amount"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.amount}
        />
        {formik.touched.amount && formik.errors.amount ? <p style={{color:"red", marginTop:"-3%", marginLeft:"7%"}}>{formik.errors.amount}</p> : null }
        </div>

        

        <div onClick={handleOpen} onSubmit={formik.handleSubmit}>
      
      <div className="request-janaza-button">
      <Button
                onClick={handleOpen}
                width='85px'
                height='32px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Submit'
                />


                </div>
                </div>
      
                <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div style={{width: "300px"}}>
        <Fade in={open}>
          <Box sx={style}>
            <Typography style={{textAlign: 'center'}} id="transition-modal-title" variant="h6" component="h2">
              Upload Required Images
            </Typography>
            <p>image 1: 
            <span><input style={{marginTop: '5%', marginLeft: '29%'}} accept="image/png, image/jpeg" type='file' /></span>
              </p>
            
              <p>image 2: 
            <span><input style={{marginTop: '5%', marginLeft: '29%'}} accept="image/png, image/jpeg" type='file' /></span>
              </p>

              <p>image 3: 
            <span><input style={{marginTop: '5%', marginLeft: '29%'}} accept="image/png, image/jpeg" type='file' /></span>
              </p>
            
           
            <div style={{marginLeft: '75%', marginTop: '10%'}}>
            <Link to='/'>
            <Button
                
                onClick={handleOpen}
                width='85px'
                height='32px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Submit'

            />
            </Link>
            </div>
           
          </Box>
        </Fade>
        </div>
      </Modal>


                </form>
                
      </div>
      
      
    </>
  );
};
export default Donation;