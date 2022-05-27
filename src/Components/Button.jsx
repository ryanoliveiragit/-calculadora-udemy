import React from "react";
import './Button.css'

export default props =>
    <button onClick={E => props.click && props.click(props.label)} className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}>
        {props.label}
    </button>