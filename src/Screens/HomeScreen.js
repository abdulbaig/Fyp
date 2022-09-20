import React from 'react'
import {Routes, Route} from "react-router-dom"
import Donation from './Donation'
import Home from './Home'
import RequestJanazaFundModel from './RequestJanazaFundModel'
import RequestFund from './RequestFund'
import DonationStep2 from './DonationStep2'
import DonationStep3 from './DonationStep3'
import MarketSearch from './MarketSearch'
const HomeScreen = () => {
  return (
      <>
      <Routes>
      <Route path='/Home' element={<Home />} />
      
      <Route path="/RequestJanazaFundModel" element={<RequestJanazaFundModel />} />
      <Route path='/RequestFund' element={<RequestFund />} />
      <Route path='/Donation' element={<Donation />} />
      <Route path='/DonationStep2' element={<DonationStep2 />} />
      <Route path='/DonationStep3' element={<DonationStep3 />} />
      <Route path='/MarketSearch' element={<MarketSearch/>} />
      
      </Routes>
      </>
  )
}

export default HomeScreen