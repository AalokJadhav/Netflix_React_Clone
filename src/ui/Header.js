import React, { useEffect, useState } from "react";
import classNames from 'classnames';

import logo from 'assets/logo-full.png';


function Header() {
  const [floating, setFloating] = useState(false);


  useEffect(() => {
    function handleScroll() {
      // console.log('Scroll Count:', window.scroll);
      if (window.scrollY > 100) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signin = () => {
    window.location.href = "https://www.netflix.com/in/login";
  }

  return (
    <div
      className={classNames(
        "header",
        { 'header--float': floating }
      )}
    >
      <img
        className="header__logo"
        src={logo}
        alt="Netflix logo"
      />
      <h5 style={{textAlign:'center', paddingBottom:'1%', marginTop:'0.5%', color:'rgb(225 15 15)', fontWeight:'bold'}}>This is not the Official Netflix </h5>
      <button className="header__button" type ="submit" onClick={signin}  style={{cursor:'pointer'}}>Sign In
      </button>
    </div>
  );
}

export default Header;