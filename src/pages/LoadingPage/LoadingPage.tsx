import React from 'react'
import './LoadingPage.css'

type Props = {
  appname: string;
}

export default function LoadingPage({ appname }: Props) {
  return (
    <div className='loading-page'>
      Loading {appname}
    </div>
  )
}