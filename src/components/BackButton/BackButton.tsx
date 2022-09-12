import React from 'react'
import { Link } from 'react-router-dom'
import './BackButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function BackButton() {
    return (
         <Link to='/' className='back-button'>
             <FontAwesomeIcon icon={faArrowLeft}/>
         </Link>

    )
}