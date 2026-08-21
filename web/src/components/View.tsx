import {useState} from "react";
import {send} from "../backend";

function View() {
    const [text, setText] = useState('');

    function handleSubmit(e): void {
        e.preventDefault();
        console.log("sending: ", text)
        void send(text)
    }

    return (
        <div className="main-section" id="main-frame">

            <h2 className="title" contentEditable={false}>Titulo...</h2>

            {/* readonly screen, left justified and filling rest of frame */}
            <div className="row filler" id="preview">
            </div>

            <div className="row">
                {/*TODO send with enter, prevent default */}
                <form className="row text-input">
                    <label>
                        <textarea
                            className="chat-box"
                            placeholder="Ask a question..."
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                    </label>
                    <button className="send-btn" type="submit" onSubmit={(e) => handleSubmit(e)}>Enviar</button>
                </form>
            </div>
        </div>

    )
}

export default View
