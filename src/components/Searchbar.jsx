import React from 'react'
import '../conponents_css/Searchbar.css'
function Searchbar() {
  return (
    <div className="search-content">
        <div className="search-box">
            <input type="text" placeholder="ค้นหา ชื่อหนังสือ"/>
        </div>
        <div className="step-sell">
            <button>วิธีการสั่งซื้อ</button>
        </div>
    </div>
  )
}

export default Searchbar
