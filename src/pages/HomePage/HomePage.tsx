import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const today = new Date();
  const calculatorUpdateDate = new Date('2022-04-19');
  const tictactoeUpdateDate = new Date('2022-08-04');
  const greensightUpdateDate = new Date('2022-08-31');
  const todoUpdateDate = new Date('2022-09-10');
  const ms_per_day = 1000 * 60 * 60 * 24;

  const getDaysUntilToday = (date: Date): number => {
    const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const utcDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  
    return Math.floor((utcToday - utcDate) / ms_per_day);
  }

  return (
    <div className='hp-container'>
      <div className="navigation">
        <Link className='navigation__link' to='/calculator'>Calculator
          <div className='link__description'>
            Learning Bootstrap and SCSS<br />
            <span className='last-updated'>{`last updated: ${getDaysUntilToday(calculatorUpdateDate)} days ago`}</span>
          </div>
        </Link>
        <Link className='navigation__link' to='/tic-tac-toe'>Tic Tac Toe
          <div className="link__description">
            Free time project, just for fun<br />
            <span className='last-updated'>{`last updated: ${getDaysUntilToday(tictactoeUpdateDate)} days ago`}</span>
          </div>
        </Link>
        <Link className='navigation__link' to='/greensight'>Greensight test task
          <div className="link__description">
            Test task to Greensight. Learned BEM and CSS media-query<br />
            <span className='last-updated'>{`last updated: ${getDaysUntilToday(greensightUpdateDate)} days ago`}</span>
          </div>
        </Link>
        <Link className='navigation__link' to='/todo'>Todo
          <div className="link__description">
            Learning Redux ToolKit with async reducers<br />
            <div className="last-updated">{`last updated: ${getDaysUntilToday(todoUpdateDate)} days ago`}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}