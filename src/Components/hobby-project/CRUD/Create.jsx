import { Button } from "reactstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Create = ({refresh}) => {

    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleCreate = () => {
        let obj = {
            "type": type,
            "name": name,
            "artist": artist,
            "year": year
        }

        axios.post("http://localhost:8080/api/create", obj)
        .then((res) => {
           refresh();
        }).catch((err) => {
            console.error(err.message);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Type" onChange={(e) => setType(e.target.value)}/>
                <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Enter Artist" onChange={(e) => setArtist(e.target.value)}/>
                <input type="text" placeholder="Enter Year" onChange={(e) => setYear(e.target.value)}/>
                <Button color="primary" id="submit-btn" type="submit" onClick={handleCreate}> Submit </Button>
            </form>
        </>
    );
}

export default Create;