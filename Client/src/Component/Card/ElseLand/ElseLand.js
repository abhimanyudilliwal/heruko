import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import Icon from '../../Icon/Profile'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link, useHistory } from "react-router-dom";
import './land.css'

function ElseLand() {
    
    let history = useHistory();
    let [name,setName]=useState("")
    let [phone,setPhone]=useState("")
    let [address,setAddress]=useState("")
    let [sizeofland,setSizeofland]=useState("")

    const onelseland = (event) => {
        event.preventDefault();
        let data ={
            name:name,
            phone:phone,
            address:address,
            sizeofland:sizeofland
        }
        axios.post('http://localhost:3001/api/elseland',data)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data.data);
         NotificationManager.success('Successfully Submitted');
         history.push("/home");
          console.log("end")
          
         
        })
        .catch(function (error) {
          console.log(error);
          NotificationManager.error("Server busy")
        })
    }
    return (
        <div>
            <Icon />
            <div className='container'> 
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
        <Card  className='elseland'/* style={{ width: '28rem',textAlign:'center',background:'#e0ffe0' }} */>
                <Card.Body>
                    <form className='elsland' onSubmit={onelseland}>
               <input type='text' placeholder='Name' onChange={(e) => {setName(e.target.value)}} required/><br />
               <input type='text' placeholder='Address' onChange={(e) => {setAddress(e.target.value)}} required /><br />
               <input type='text' placeholder='Phone Number' onChange={(e) => {setPhone(e.target.value)}} required /><br />
               <input type='text' placeholder='Size of land' onChange={(e) => {setSizeofland(e.target.value)}} required/>
               <button type='submit' >Request all Soil Test </button>
               </form>
                </Card.Body>

            </Card>
            <div className='col-2'></div>
        </div>
        <div className='col-1'></div>
       
      </div>

      </div>
           

        </div>
    )
}

export default ElseLand
