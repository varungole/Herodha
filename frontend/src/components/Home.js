import React from 'react'
import chart from '../components/chart.png'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
       navigate("/signup");
    }
  return (
    <div className='home'>
        <img src={chart} alt='chart'></img>
        <h2 className='home-main-title'>Invest in everything</h2>
        <h4 className='home-sub-title'>Online platform to invest in stocks, derivatives, mutual funds and more</h4>
        <button className='signup' onClick={handleClick}>Signup</button>
    </div>
  )
}

export default Home