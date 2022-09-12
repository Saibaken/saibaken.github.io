import React from 'react'
import BackButton from '../BackButton/BackButton';

type Props = {
    children: JSX.Element;
}

export default function AppWrapper({ children }: Props) {
    return (
        <>
            <BackButton />
            {children}
        </>
    )
}