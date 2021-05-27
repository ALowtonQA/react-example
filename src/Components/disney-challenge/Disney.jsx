import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "./display/Grid";

const Disney = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://api.disneyapi.dev/characters")
        .then((res) => {
            setData(res.data.data);
            setIsLoaded(true);
        }).catch((err) => {
            console.log(err.message);
            setIsLoaded(true);
        });
    }, []);

    if (isLoaded) {
        return (
            <>
                <Grid data={data}/>
            </>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
        
}

export default Disney;