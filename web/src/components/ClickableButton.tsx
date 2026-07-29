import {send} from "../backend";

function ClickableButton({title, message}: { title: string, message: string }) {
    let btn = title + "-btn"
    return (
        <button id={btn} className="btn" onClick={() => send(message)}>
            {title}
        </button>
    )
}

export default ClickableButton