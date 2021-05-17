import React from 'react'
import Card from '../Card/Card'
import Buttn from '../Soil-button/button'
import './home.css'
import Icon from '../Icon/HomeProfile'

function Home() {
    return (
        <>
        <Icon />
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
<Card title='abouts' details='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem '/>
                </div>
                <div className='col-6'>
                  <Buttn />
                </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-6'>
<Card title='vision' details='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem' />
                    </div>
                    <div className='col-6'>
<Card title='future Scope' details='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the  when an unknown printer took a galley of type and scrambled it to make a type specimen  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem' />
                    </div>
              
            </div>
            
        </div>
        </>
    )
}

export default Home
