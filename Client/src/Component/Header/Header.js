import React from 'react'
import './header.css'
import img  from '../../Asset/logo.png'

function Header() {
    return (
        <div className="container con" >
            <div className="row">
                <div className="col-5 cl" >
<img src={img} width="110"/>
                </div>
                <div className="col-7" >
                    <p className="p1"> AgriGrowth</p>
                    <p className="p2">Crop Preditive System</p>
                </div>
            </div>
           
          
            
        </div>
    )
}

export default Header
