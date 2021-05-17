import React from 'react'
import './button.css'
import {Link} from 'react-router-dom'

function Button() {
    return (
        <div className='bcon'>
            <button type='submit' className='btn'><Link to='/land' className='hyper'>Request all Soil testing</Link></button>
        </div>
    )
}

export default Button
