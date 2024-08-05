import React from 'react'
import "./Signup.css"
import CommonBtn from '../Common/CommonBtn'
import Input from './Input'
function CustomSignup() {
  return (
    <div className='Signup'>  

    <h3 className='headSignup'>SIGNUP</h3>
    <Input placeholder={'Enter your name'}/>
    <Input placeholder={'Phone number'}/>
    <Input placeholder={'Password'}/>
    <Input placeholder={'Confirm Password'}/>
  <CommonBtn Label={'Signup'}/>
</div>
  )
}

export default CustomSignup
