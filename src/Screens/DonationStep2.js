import React from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import './DonationStep2.css'
import { Link } from "react-router-dom";
import WebDrawer from '../Screens/WebDrawer'


const DonationStep2 = () => {
    return (

        <>
        <NavBar />
        <WebDrawer />
        <div className="donationStep2-main-div">
                <div className="donationStep2-div">
                <h5>Send Donation to This Account</h5>
                <p>BANK NAME : MEEZAN BANK</p>
                <p>ACCOUNT NUMBER : 12345678901</p>
                <p>NAME: ALI HAFEEZ</p>
                <h6>Click on CONFIRM if the donation has been sent</h6>
                <Link to="/Home">
                <Button
                width='85px'
                height='35px'
                backgroundColor='#02a95c'
                color='#fafcf8'
                buttonName='Confirm'
                />
                </Link>
                </div>
        </div>
        {/* <input type="file"/> */}
        </>
    )
}
export default DonationStep2