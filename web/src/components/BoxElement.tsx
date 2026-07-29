import ClickableButton from "./ClickableButton";

interface BoxElementProps {
    name: string,
    action: string,
    placeholder?: string
}

function BoxElement({name, action, placeholder}: BoxElementProps) {
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