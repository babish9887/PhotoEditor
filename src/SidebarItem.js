import React from 'react'
import './App.css';

function SidebarItem({name, active, handleClick}) {
  return (
    <button
     className={`sidebar-item ${active? 'active': ""}`}
     onClick={handleClick}
     >{name}</button>
  )
}

export default SidebarItem