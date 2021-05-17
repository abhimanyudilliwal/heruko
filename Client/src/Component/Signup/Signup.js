import React,{useState} from 'react'
import img1 from '../../Asset/logo.png'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link, useHistory } from "react-router-dom";
import './signup.css'

function Signup() {
    let history = useHistory();
    let [name,setName]=useState('')
    let [phone,setPhone]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')

    const onSubmmitted = (event) =>{
        event.preventDefault();
        console.log("signup")
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(password)
        let data={
            fullname:name,
            phone:phone,
            email:email,
            password:password

        }

        axios.post('http://localhost:3001/api/register',data)
          .then(function (response) {
            console.log(response.data);
            console.log(response.data.data);
           NotificationManager.success('Successfully Registration');
           history.push("/login");
            console.log("end")
            
           
          })
          .catch(function (error) {
            console.log(error);
            NotificationManager.error("Please Check your Email already Registered")
          })
         
    }
    return (
        <div className="container scon">
            <div className="row">
                <div className="col-5 scl">
<img src={img1} width="150" />
                </div>
                <div className="col-7 sc2">
                <form  onSubmit={onSubmmitted} className="box" action="#" method="post">

<h1>SIGN UP</h1>

<input type="text" name="" placeholder="Full name" onChange={ (e) => {setName(e.target.value)}} required />
<input type="phone" name="" placeholder="Phone number" onChange={ (e) => {setPhone(e.target.value)}} required/>
<input type="text" name="" placeholder="Email Address" onChange={ (e) => {setEmail(e.target.value)}} required />
  
<input type="password" name="" placeholder="Password" onChange={ (e) => {setPassword(e.target.value)}} required />

<input type="submit" name="" value="Create Account" />
<p> Already Account||<Link to='/login' >Login Account</Link>
                </p>

</form>

                </div>
            </div>
            
        </div>
    )
}

export default Signup
