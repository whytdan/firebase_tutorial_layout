import React from 'react'
import Navbar from '../components/general/Navbar'

export default function BasicLayout(props) {
    return (
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}
