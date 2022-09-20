import React from 'react'
import './NavBar.css';
import BrandName from './BrandName';
import Button from './Button';
import InputField from './InputField';
import { Link } from 'react-router-dom';

const NavBar = () => {
  {
    return (
        <>
        <div className='row nav-row'>
            <nav className="navbar navbar-expand-lg navbar-light nav-main">
{/*             
            <div className='nav-search'>
            <InputField
              placeholder='search'
            />
            </div> */}
  <a className="navbar-brand home-nav-brand-name" href="#">
      <BrandName />
  </a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse nav-items" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to='/Home' className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign in</a>
      </li>
      <li className="nav-item">
      <Button
      backgroundColor= '#ffffff'
      color= '#02a95c'
      buttonName='start a Community Assist'
      height='5.5vh'
      />
      </li>
    </ul>
  </div> */}
  
</nav>
</div>
        </>
    )
  }
}
export default NavBar
