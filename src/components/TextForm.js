import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoweCaseClick= ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert To uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoweCaseClick}>Convert To uppercase</button>
            </div>
            <div className="container my3">
                <h1>your text summary</h1>
                <p> {text.split(" ").length} words , {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes to read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
