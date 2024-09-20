import React from 'react'
import "./agedisplay.style.css"

function AgeDisplay(props) {
    return (
        <div style={{
            display: props.showAge ? "flex" : "none"
        }} className="AgeDisplay">
            <div className="card">
                <p className="title">Your age</p>
                <p className="description">Your age has been calculated by an hypercomplex algorithm and the result is:</p>
                <p className="age">{props.age ?? 0}</p>
                <button onClick={() =>{
                    props.setShowAge(false)
                }}>Ok</button>
            </div>
        </div>
    )
}

export default AgeDisplay