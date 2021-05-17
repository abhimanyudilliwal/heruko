import React,{useState} from 'react'
import img1 from '../../Asset/logo.png'
import axios from 'axios'
import Header from '../Header/Header'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './login.css'
import { Link, useHistory } from "react-router-dom";


function Signup() {
    let history = useHistory();
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')

    const onSubmmitted = (event) =>{
        event.preventDefault();
        console.log("Login")
      
        console.log(email)
       
        console.log(password)
        let data={
            email:email,
            password:password

        }

        axios.post('http://localhost:3001/api/login',data)
          .then(function (response) {
            console.log(response.data);
            console.log(response.data.data);
           NotificationManager.success('Successfully Login');
            console.log("end")
            localStorage.setItem("userId",response.data.data.email)
            localStorage.setItem("getId",response.data.data._id)
            history.push("/form");
           
          })
          .catch(function (error) {
            console.log(error);
            NotificationManager.error("Please try some time ")
          })
         
    }
    return (
        <>
      
        <div className="container scon">
            <div className="row">
                <div className="col-5 scl">
<img src={img1} width="150" />
                </div>
                <div className="col-7 sc2">
                <form  onSubmit={onSubmmitted} className="box" /* action="#" method="post" */>

<h1>Login Account</h1>


<input type="text" name="" placeholder="Email Address" onChange={ (e) => {setEmail(e.target.value)}} required />
  
<input type="password" name="" placeholder="Password" onChange={ (e) => {setPassword(e.target.value)}} required />

<input type="submit" name="" value="Create Account" />
<p> Already Account||<Link to="/">Registration Account</Link>
                </p>

</form>

                </div>
            </div>
            
        </div>
        </>
    )
}

export default Signup
