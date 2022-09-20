import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import Home from './Screens/Home';
import Donation from './Screens/Donation';
import MarketSearch from './Screens/MarketSearch';
import Landing from './Screens/Landing';
import DonationStep2 from './Screens/DonationStep2';
import DonationStep3 from './Screens/DonationStep3';
import RequestFund from './Screens/RequestFund';
import RequestJanazaStatus from './Screens/RequestJanazaStatus';
import RequestJanazaFundModel from './Screens/RequestJanazaFundModel';
import DonationStatus from './Screens/DonationStatus';
import StatusDrawer from './Screens/StatusDrawer';
import HomeScreen from './Screens/HomeScreen';
import WebDrawer from './Screens/WebDrawer';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import LandingPage from './Screens/LandingPage';
import RequestStudentStatus from './Screens/RequestStudentStatus';
import ViewProfile from './Screens/ViewProfile';
import LandingPageSignUp from './Screens/LandingPageSignUp';

const App = () => {
  return (
    <div>
    {/* <LandingPage /> */}
    
    <Routes>
    
      <Route path='/' element={<LandingPage />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path="/Home/RequestJanazaFundModel" element={<RequestJanazaFundModel />} />
      <Route path='/Home/RequestFund' element={<RequestFund />} />
      <Route path='/Home/Donation' element={<Donation />} />
      <Route path='/RequestJanazaStatus' element={<RequestJanazaStatus />} />
      <Route path='/RequestStudentStatus' element={<RequestStudentStatus />} />
      <Route path='/DonationStatus' element={<DonationStatus />} />
      <Route path='/Home/DonationStep2' element={<DonationStep2 />} />
      <Route path='/Home/DonationStep3' element={<DonationStep3 />} />
      <Route path='/Home/MarketSearch' element={<MarketSearch/>} />
      <Route path='/ViewProfile' element={<ViewProfile />} />
      <Route path='/LandingPageSignUp' element={<LandingPageSignUp />} />


      {/* <Route path='/' element={<MarketSearch/>} /> */}

      


      
    </Routes>
    
    
   
    
    </div>
  )
}

export default App;
