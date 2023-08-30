import React from 'react'
import './Popup.css'
const Popup = ({onClick}) => {
  return (
    <div className='Popup'>
        <div className="Popup-In">
            <h1 className="close" onClick={onClick}>X</h1>
            <br/>
            <br/>
            <center>
                <span className="tick">&#10003;</span>
            </center>
            <h2 className='text'>You have <br/>
            Successfully Signed Up</h2>
        </div>
    </div>
  )
}

export default Popup