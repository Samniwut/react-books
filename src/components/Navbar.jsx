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
                โปรโมชั่น
            </div>
            <div className="login">
                Login
            </div>
            <div className="shop">
                shop
            </div>
        </div>
    </div>
  )
}
