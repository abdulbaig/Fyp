import React from 'react'
import NavbarForLanding from "../Screens/NavbarForLanding"
import './LaningPage.css'
import Login from './Login'
import Footer from './Footer'
import FypLogo from '../Assets/images/FypLogo.jpeg'

const LandingPage = () => {
  return (
    <>
    <div className='landingpage-main'>
    <NavbarForLanding />
        <div class="split left">
  <div classNamme="centered">
    
    <h1 className='landing-page-heading'>Welcome to
    {/* <br></br>
     <span style={{paddingLeft: '10%'}}>to </span> */}
     <br></br>
     <span className='landing-heading-brand'>Community Assist</span>
     <span>
      <div className='fyp-logo-holder'>
      <img src={FypLogo} />
      </div>
      </span>
     </h1>

     <div className=''>

     </div>
  </div>
</div>

<div className="split right">
    <div className='landing-login-holder'>
    <Login />
    </div>
  
</div>

    </div>
    
    <Footer />
    
    </>
  )
}

export default LandingPage