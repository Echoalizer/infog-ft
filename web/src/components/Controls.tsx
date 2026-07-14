import BoxElement from "./BoxElement";
import ResourcesList from "./ResourcesList";
import StickyButton from "./StickyButton";

function Controls() {
    return (
        <div id="left-controls">
            <h2 className="title">Generación de informes</h2>

            {/* Los nombres de estos botones deberían traducirse */}
            <BoxElement name="upload" action="Subir un archivo"></BoxElement>
            <BoxElement name="search" action="Buscar información" placeholder="dogs and cats"></BoxElement>
            <BoxElement name="extract" action="Extraer de un sitio web" placeholder="https://www.site.com"></BoxElement>

            <ResourcesList></ResourcesList>

            <div className="filler"></div>
            {/* I don't really like this */}
            <StickyButton></StickyButton>
        </div>
    )
}

export default Controls;
