import {useState} from "react";

const Car = () => {

    const [brand, setBrand] = useState("BMW");
    const [model, setModel] = useState("E46 M3 GTR");
    const [colour, setColour] = useState("Silver");
    const [year, setYear] = useState("2001");

    const handleSubmit = (e) => {
        e.preventDefault();
        const DATA_TO_SEND = JSON.stringify({brand, model, colour, year});
        console.log(DATA_TO_SEND);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Brand: </label>
                <input 
                    name = "brand"
                    value = {brand}
                    onChange = {(e) => setBrand(e.target.value)}
                />
                <label> Model: </label>
                <input 
                    name = "model"
                    value = {model}
                    onChange = {(e) => setModel(e.target.value)}
                />
                <label> Colour: </label>
                <input 
                    name = "colour"
                    value = {colour}
                    onChange = {(e) => setColour(e.target.value)}
                />
                <label> Year: </label>
                <input 
                    name = "year"
                    value = {year}
                    onChange = {(e) => setYear(e.target.value)}
                />
            <button type="submit"> Submit </button>
            </form>
        </>
    );
}

export default Car;