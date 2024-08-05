import React from 'react'
import './Login.css'
import CommonBtn from '../Common/CommonBtn'
import Input from './Input'

function CustomLogin() {
  return (
    <div className='Login'>
        
        <h3 className='headLogin'>LOGIN</h3>
        <Input placeholder={'Username'}/>
        <Input placeholder={'Password'}/>
        <Input placeholder={'Authentication Key'}/>
      <CommonBtn Label={'Login'}/>
    </div>
   
  )
}

export default CustomLogin
