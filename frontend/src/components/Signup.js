import React from 'react'

function Signup() {
  return (
    <div className='signup-main'>
        <h2 className='signup-now'>Signup Now</h2>
        <h3 className='phone-text'>Enter your mobile number</h3>
        <div className='input-fields'>
        <select className='select-value'>
         <option value="+91">+91</option>
         <option value="+1">+1</option>
        </select>
        <input className='phone' type='tel' id='phone' required></input>
        </div>
        <button className='continue'>Continue</button>
        <label className='otp-label'>You will recieve an OTP to your number</label>
    </div>
  )
}

export default Signup