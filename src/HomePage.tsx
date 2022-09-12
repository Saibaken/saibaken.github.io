import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to='/calculator'>calculator</Link><br></br>
      <Link to='/tic-tac-toe'>tic-tac-toe</Link><br></br>
      <Link to='/greensight'>greensight</Link><br></br>
      <Link to='todo'>todo</Link>
    </div>
  )
}