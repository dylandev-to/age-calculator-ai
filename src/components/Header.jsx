import React from 'react'
import "./header.style.css"

function Header() {
  return (
    <div className="Header">
        <img src="/logo.png" height={40} width={40} alt="" />
        <p>&lt;/&gt; DylanDev</p>
    </div>
  )
}

export default Header