import ActionForm from "./ActionForm";
import ResourcesList from "./ResourcesList";

import {extract, search} from "../backend";

async function addFile(): Promise<void> {
    // call electron ipc to open file manager, and await file selection response
    // add file to
    console.log("opening file browser to select file")
    window.ElectronAPI.openFileBrowser()
}

/*
function StickyButton() {
    return (
        <div className="row footer sticky" hidden={true}>
            <button id="generate-btn">Generar</button>
        </div>
    )
*/

function Controls() {
    return (
        <div className="main-section" id="control">
            <h2 className="title">Generación de informes</h2>

            <ActionForm action="search" submitCallback={search}></ActionForm>
            <ActionForm action="extract" submitCallback={extract}></ActionForm>
            <ActionForm action="upload" submitCallback={addFile}></ActionForm>

            <ResourcesList></ResourcesList>

            {/*
            <div className="filler"></div>
            <StickyButton></StickyButton>
            */}

        </div>
    )
}

export default Controls;
