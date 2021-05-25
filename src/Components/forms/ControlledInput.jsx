import {useState} from "react";

const ControlledInput = () => {

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const DATA_TO_SEND = JSON.stringify({name});
        console.log(DATA_TO_SEND);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input 
                    type = "text" 
                    name = "name" 
                    id = "name"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                />
                <button type="submit"> Submit </button>
            </form>
            <h1> {name} </h1>
        </>
    );
}

export default ControlledInput;