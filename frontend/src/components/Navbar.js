import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  
  const navigate = useNavigate();
  const handleClick = () => {
        navigate("/");
  }

  return (
    <div className='navbar-main'>
        <div className='Herodha' onClick={handleClick}>Herodha</div>
        <li className='list-components'>
            <ul className='list-item'>Signup</ul>
            <ul className='list-item'>About</ul>
            <ul className='list-item'>Products</ul>
            <ul className='list-item'>Pricing</ul>
            <ul className='list-item'>Support</ul>
            <ul className='list-item'>Three Lines</ul>
        </li>
    </div>
  )
}

export default Navbar