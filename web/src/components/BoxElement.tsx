import ClickableButton from "./ClickableButton";

function BoxElement({name, action, placeholder}: { name: string, action: string, placeholder?: string }) {
    let box: string = name + "-box"
    return (
        <div className="row">
            <label htmlFor={box}>{action}</label>
            <div className="text-input">
                <textarea id={box} placeholder={placeholder || "values.csv"}></textarea>
                <ClickableButton title={name} message="state"></ClickableButton>
            </div>
        </div>
    )
}

export default BoxElement;