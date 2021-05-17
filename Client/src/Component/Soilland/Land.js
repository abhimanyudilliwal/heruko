import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './land.css'
import {Link} from 'react-router-dom'

function Land() {
    return (
        <>
      <div className='container'> 
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-9'>
        <Card  className='clcard'/* style={{ width: '28rem',textAlign:'center',background:'#e0ffe0' }} */>
                <Card.Body>
                <Button variant="" ><Link to='ownland' className='hyper'>For Your Own Land</Link></Button>
    <br/>
    <Button variant=""  ><Link to='elseland' className='hyper'>For Some One Else</Link></Button>
                  
                </Card.Body>

            </Card>
        </div>
        <div className='col-1'></div>
       
      </div>

      </div>
     
        </>
    )
}

export default Land
