import React from 'react'
import { Card } from 'react-bootstrap'
import './card.css'

function Cards(props) {
    return (
        <div>
            <Card  className='clcard'/* style={{ width: '28rem',textAlign:'center',background:'#e0ffe0' }} */>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                   
                    <Card.Text>
                        {props.details}
    </Card.Text>
                  
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards
