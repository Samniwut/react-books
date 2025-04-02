import React from "react";
import "../conponents_css/Footer.css";

function Footer() {
  return (
    <div className="content-footer">
      <div className="footer-content-logo">
        <h1>Books Sela</h1>
        <a href="#">โปรชั่น</a>
        <a href="#">หนังสือ</a>
        <a href="#">EBook</a>
        <a href="#">นิตยาสาร</a>
        <a href="#">มังงะ</a>
      </div>
      <div className="footer-content-contact">
        <h1>ติดต่อ</h1>
        <p>Copyright © Niwut punaout</p>
      </div>
    </div>
  );
}

export default Footer;
