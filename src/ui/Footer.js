import React from "react";
import footer_image from 'assets/footer_logo.png'
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <>
      <footer className='footer'>
      <span className="footer_span" style={{ float: 'left', paddingLeft: '8%' }}>
            <img src={footer_image} style={{ height: "35px", paddingBottom:'1%' }} alt="" />
          </span>
        <div className='footer__copyright'>
          Made with <span style={{color:'red'}}>❤️</span> by{' '}
          <a className='footer_link' href='https://github.com/AalokJadhav'>
            {' '}
            Alok Jadhav
          </a>
          <span className="footer_span" style={{ float: 'right', paddingRight: '10%' }}> Copyright © {year} </span>
        </div>
      </footer>
    </>
  )
}

export default Footer;