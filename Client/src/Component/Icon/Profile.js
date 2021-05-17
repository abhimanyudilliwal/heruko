import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import {Dropdown,Button,ButtonGroup} from 'react-bootstrap'

import './icon.css'


function Profile() {
    let history = useHistory();
    const data = localStorage.getItem("userId")
    const onBack = () => {
        history.goBack()
    }

    const onHome = () => {
        history.push('/home')
    }
    const onlogout = () => {
        localStorage.clear()
        history.push('/')
     }
    return (
        <div className='container icon'>
            <div className='row'>
                <div className='col-1'>
 <button onClick={onBack} className='back'>  Back </button>
                </div>
                <div className='col-8'>

                </div>
                <div className='col-1'>
                <button onClick={onHome} className='Home'>  Home </button>  
                </div>
                <div className='col-2'>
                <div class="dropdown">
                        <button class="dropbtn">Profile</button>
                        <div class="dropdown-content">
                            <a class="dropdown-item" href="#"> {data} </a>
                            <Link to='/userview' class="dropdown-item" href="#">View Profile </Link>
                           {/*  <a class="dropdown-item" href="#"> Notifications </a> */}
                            <a class="dropdown-item" onClick={onlogout}>Logout </a>
                        </div>
                    </div>
                </div>
               {/*  <div className='col-1'>
                <button onClick={onHome} className='Home'>  Home </button>  
                </div> */}
            </div>
           
        </div>
    )
}

export default Profile
