import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert To uppercase</button>
        </div>
    )
}
