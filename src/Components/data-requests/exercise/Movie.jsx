import {useState} from "react";
import axios from "axios";

const Movie = () => {
    const [data, setData] = useState("");
    const [movieName, setMovieName] = useState("");

    const getMovie = () => {
        axios.get("http://www.omdbapi.com/?apikey=9eb9699e&t=" + movieName)
        .then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <>
            <input type="text"></input>
        </>
    )
}