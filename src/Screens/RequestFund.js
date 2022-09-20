import React from "react";
import NavBar from "../components/NavBar";
import TabsMui from "../components/TabsMui";
import "./RequestFund.css";


const RequestFund = () => {
    return (
        <>
            <NavBar />
            <div className="requestFundMain">
            <TabsMui />
            </div>
        </>
    )
}
export default RequestFund