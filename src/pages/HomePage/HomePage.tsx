import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='hp-container'>
      <div className="navigation">
        <Link className='navigation__link' to='/calculator'>Calculator
          <div className='link__description'>
            Learning Bootstrap and SCSS<br/>
            <span className='last-updated'>last updated: date</span>
          </div>
        </Link>
        <Link className='navigation__link' to='/tic-tac-toe'>Tic Tac Toe
          <div className="link__description">
            Free time project, just for fun<br/>
            <span className='last-updated'>last updated: date</span>
          </div>
        </Link>
        <Link className='navigation__link' to='/greensight'>Greensight test task
          <div className="link__description">
            Test task to Greensight. Learned BEM and CSS media-query<br/>
            <span className='last-updated'>last updated: date</span>
          </div>
        </Link>
        <Link className='navigation__link' to='/todo'>Todo
        <div className="link__description">
            Learning Redux ToolKit with async reducers<br/>
          <div className="last-updated">last updated: date</div>
        </div>
        </Link>
      </div>
    </div>
  )
}