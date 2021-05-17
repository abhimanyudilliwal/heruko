import React,{useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import Icon from '../../Icon/Profile'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Link, useHistory } from "react-router-dom";
import './ownland.css'

function OwnLand() {
    let history = useHistory();
    let [land1,setLand1] =useState('')
    let [land2,setLand2] =useState('')
    let [land3,setLand3] =useState('')

    const ownlands = (event) => {
        event.preventDefault();
        console.log(land1)
        console.log(land2)
        console.log(land3)
        let data={
            land1:land1,
            land2:land2,
            land3:land3
        }
        axios.post('http://localhost:3001/api/ownland',data)
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
             <div className='container-fluid'> 
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-10'>
        <Card  className='clcardland'/* style={{ width: '28rem',textAlign:'center',background:'#e0ffe0' }} */>
                <Card.Body>
                    <form className='land' onSubmit={ownlands}>
               <input type='text' placeholder='BinChawal,Bikaner' onChange={(e) =>{setLand1(e.target.value)}} required/><br />
               <input type='text' placeholder='Khara,Bikaner' onChange={(e) =>{setLand2(e.target.value)}} required/><br />
               <input type='text' placeholder='Khajuwala,Bikaner' onChange={(e) =>{setLand3(e.target.value)}} required/>
               <button type='submit' >Request all Soil Test </button>
               </form>
                </Card.Body>

            </Card>
        </div>
        <div className='col-1'></div>
       
      </div>

      </div>
        </div>
    )
}

export default OwnLand
