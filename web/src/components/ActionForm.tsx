// import ClickableButton from "./ClickableButton";
import {useState} from "react";

type Action = "upload" | "search" | "extract";

interface ActionRowProps {
    action: Action,
    submitCallback: (message: string) => Promise<void>
}

interface ActionConfig {
    title: string;
    label: string;
    placeholder: string;
}

const ACTION_CONFIG: Record<Action, ActionConfig> = {
    upload: {
        label: "Subir un archivo",
        title: "Abrir",
        placeholder: "values.csv",
    },
    search: {
        label: "Buscar información",
        title: "Buscar",
        placeholder: "plan Castro Madrid",
    },
    extract: {
        label: "Extraer de un sitio web",
        title: "Extraer",
        placeholder: "https://www.site.com",
    },
};

function ActionForm({action, submitCallback}: ActionRowProps) {
    const [text, setText] = useState("")
    const {label, title, placeholder} = ACTION_CONFIG[action]

    const handleSubmit = (message: string): void => {
        // clear input box
        setText("")
        // create resource box

        submitCallback(message)
            .then() // preload to resources
    }

    return (
        <div className="row">
            <label htmlFor={action}>{label}</label>
            <div className="text-input">
                <input type="text"
                       id={action}
                       placeholder={placeholder}
                       value={text}
                       onChange={e => setText(e.target.value)}
                ></input>
                <ActionButton title={title} onClick={() => handleSubmit(text)}></ActionButton>
            </div>
        </div>
    )
}

function ActionButton({title, onClick}: { title: string, onClick: () => void }) {
    return (
        <button className="btn" onClick={onClick}>
            {title}
        </button>
    )
}

export default ActionForm;