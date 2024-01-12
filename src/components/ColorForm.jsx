import { useRef } from "react";


function ColorForm() {

    const txtTitle = useRef();
    const hexColor = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`The title of the color ${title} and the hex code is ${color}`)
        txtTitle.current.value = ''
        hexColor.current.value = ''

    };

    return (
        <div className="colorForm">
            <h1>Color form here</h1>
            <form onSubmit={handleSubmit}>
                <input
                ref={txtTitle}
                type="text" 
                placeholder="color title"/>
                <input
                ref={hexColor} 
                type="color" 
                />
                <button>Add</button>

            </form>

        </div>
    )
}

export default ColorForm;