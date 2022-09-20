import React from 'react'
import NavBar from '../components/NavBar'
import './LaningPage.css'
import Login from './Login'
import Footer from './Footer'
import FypLogo from '../Assets/images/FypLogo.jpeg'
import SignUp from './SignUp'

const LandingPageSignUp = () => {
  return (
    <>
    <div className='landingpage-main'>
    <NavBar />
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
    <SignUp />
    </div>
  
</div>

    </div>
    
    <Footer />
    
    </>
  )
}

export default LandingPageSignUp