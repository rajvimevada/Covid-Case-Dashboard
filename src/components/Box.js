import React from 'react'
import './App.css'
import { Component } from 'react'



const  Box = (props)=> {
    const bg=props.bg
  return (
    <ul>
        <li className={'card'} >
            <div className={`${bg} card_main`}>
                <div className='card_inner'>
                    <p className='card_name'>
                        <span className='our'>{props.t1} </span>
                        {props.t2}
                    </p> 
                    <br/>
                    <p className='card_total card_small'>
                        {props.t3}
                    </p>
                </div>
            </div>
        </li>
    </ul>
  )
}



export default Box

