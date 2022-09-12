import React from 'react'

type Props = {
    appname: string;
}

export default function LoadingPage({appname}: Props) {
  return (
    <div>Loading {appname}</div>
  )
}