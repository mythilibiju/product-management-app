import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
function Navbar() {
  return (
    <div 
  style={{
    width: '100%',
    height: '45px',
    backgroundColor: 'lightgrey',
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: 0 
  }}>
    <div>
        <RxDashboard />
        <Link to='/'>Dashboard</Link>
    </div>
    <div>
        <IoMdAdd />
        <Link to='/add'>Add product</Link>
    </div>
    </div>
  )
}

export default Navbar