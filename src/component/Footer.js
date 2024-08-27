import './Footer.css'
import React from 'react'
import back from '../assets/gui/back.svg'
import next from '../assets/gui/next.svg'
import { useLocation, useNavigate } from 'react-router-dom'

const Footer = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  function backNextHandler(){
    navigate('/menuPage')
  }
  return (
    <div className='footer'>
      <div className='btn-container'>
        <button className='back-btn' onClick={backNextHandler}>
          <img src={back} alt='Back button'></img>
          <span>Back</span>
        </button>
        { location.pathname === '/policypage' &&
          <p className='midle-heading'>Select <span>Next</span> to proceed</p>
          }
        <button className='next-btn' onClick={backNextHandler}>
          <span>Next</span>
          <img src={next} alt='Next button'></img>
        </button>
      </div>
    </div>
  )
}

export default Footer
