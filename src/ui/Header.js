import React from "react";
import '../styles/_header.scss';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-full.png';


function Header() {
  const signin = () => {
    window.location.href = "https://www.netflix.com/in/login";
  }
  return (
    <>
      <header className="showcase">
        <div className="showcase-top">
          <img src={logo} alt="logo" />
          <Link  to="/trending"className="btn-header btn-rounded">
            Trending Now
          </Link>
        </div>
        <h4 style={{ textAlign: 'center', color: '', fontWeight: 'bold' }}>This is not the Official Netflix </h4>
        <div className="showcase-content">
          <h2 style={{fontSize: '3rem'}}> Unlimited Movies, TV Shows and more</h2>
          <h5 style={{fontSize: '1rem'}}>Ready to Watch.?</h5>
            <div className ="form-inline">
            <input type="text"  placeholder="Enter Your Email.." size="50"  autoComplete="off" style={{height:'45px', padding:'15px 15px', fontFamily:'monospace',outlineWidth:'0'}}/>
            <Link to="/">
            <button type ="submit" className ="btn-header btn-xl" onClick={signin}> Get Started  ▶ </button>
            </Link>
            <div/>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;