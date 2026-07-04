import React from "react";
import send from "./utils";

function Controls() {
    return (
        <div id="left-controls">
            <BoxElement name="upload" action="Abrir"></BoxElement>
            <BoxElement name="search" action="Buscar"></BoxElement>
            <BoxElement name="extract" action="Extraer"></BoxElement>

            <ResourcesList></ResourcesList>
            <StickyButton></StickyButton>
        </div>
    )
}

function BoxElement({name, action}) {
    let box = name + "-box"
    return (
        <div className="row">
            <label htmlFor={box}>{action}</label>
            <div className="text-input">
                <textarea id={box} placeholder="values.csv"></textarea>
                <ClickableButton title={name} message="upload"></ClickableButton>
            </div>
        </div>
    )
}


function ClickableButton({title, message}) {
    let btn = title + "-btn"
    return (
        <button id={btn} className="btn" onClick={() => send(message)}>
            {title}
        </button>
    )
}

function ResourcesList() {
    return (
        <div className="row">
            <li id="resources">

            </li>
        </div>
    )
}

function StickyButton() {
    return null;
}

export default Controls;