import React, { useState } from 'react';
import "./LogReg.css";
import useAuth from '../../hooks/useAuth';


const LogReg = () => {
  const {registerUser,loginUser}=useAuth();
  const [register,setRegister] = useState(false);
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [pass,setPass] = useState();
  
    return (
      <div className='login'>
      {!register && <p>Login Here</p>}
      {register && <p>Register Here</p>}
  <form onSubmit={(e)=>e.preventDefault()}>
  {register && <input type='text' placeholder='your name' onChange={(e)=>setName(e.currentTarget.value)}/>}
  <br />
  <br />
  <input type='email' placeholder='your email' onChange={(e)=>setEmail(e.currentTarget.value)}/>
  <br />
  <br />
  <input type='password' placeholder='your password' onChange={(e)=>setPass(e.target.value)}/>
  <br />
  <br />
  {register && <input onClick={()=>registerUser(email,pass,name)}type='submit' value="Register"/>}
  {!register && <input onClick={()=>loginUser(email,pass)}type='submit' value="Login"/>}
  <br />
  <br />
  </form>
  {!register && <p>new user? <span onClick={()=>setRegister(true)}>Register</span></p>}
  {register && <p>Already Registered? <span onClick={()=>setRegister(false)}>Login</span></p>}
  </div>
    );
};

export default LogReg;