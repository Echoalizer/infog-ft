
function View() {
    return (
        <div>
            <h2 className="title">Titulo</h2> {/* To be modified */}

            {/* readonly screen, left justified and filling rest of frame */}
            <div className="row-right filler" id="preview">
            </div>

            <div className="row-right">
                {/* label is added for accessibility. what should be put in it? */}
                <label htmlFor="chat-box"></label>
                <textarea id="chat-box" placeholder="Ask a question..."></textarea>
            </div>
        </div>

    )
}

function Map() {
    return (
        <div>

        </div>
    )
}

export default View