import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='homepage'>
      <h1 className='homepage__title'>HomePage</h1>
      <Link className='homepage__link' to='/calculator'>calculator</Link><br></br>
      <Link className='homepage__link' to='/tic-tac-toe'>tic-tac-toe</Link><br></br>
      <Link className='homepage__link' to='/greensight'>greensight</Link><br></br>
      <Link className='homepage__link' to='todo'>todo</Link>
    </div>
  )
}