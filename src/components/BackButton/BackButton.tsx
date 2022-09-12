import React from 'react'
import { Link } from 'react-router-dom'
import './BackButton.css'

type Props = {}

export default function BackButton({ }: Props) {
    return (
        <Link to='/' className=''>←</Link>
    )
}