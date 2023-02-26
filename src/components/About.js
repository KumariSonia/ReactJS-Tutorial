import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [enableDark, setEnableDark] = useState('Enable dark mode')

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setEnableDark('Disable dark mode')
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setEnableDark('Enable dark mode')
        }

    }
    return (
        <div style={myStyle}><h1>About us</h1>
            <button onClick={toggleStyle}>{enableDark}</button>
        </div>
    )
}
