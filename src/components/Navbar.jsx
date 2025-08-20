import React from 'react'
import '../conponents_css/Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            Books Sale
        </div>
        <div className="sell">
            <div className="promotion">
                <a href="#">โปรโมชั่น</a>
            </div>
            <div className="login">
                <a href="#">Login</a>
            </div>
            <div className="shop">
                <a href="#">shop</a>
            </div>
        </div>
    </div>
  )
}
