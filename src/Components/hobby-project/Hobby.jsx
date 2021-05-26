import axios from "axios";
import { useState, useEffect } from "react";
import Create from "./CRUD/Create";
import MainTable from "./display/MainTable";

const Hobby = () => {

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/api/getAll")
        .then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err.message);
        });
    }, [refresh]);

    const triggerRefresh = () => {
        setRefresh(x => !x);
    }

    return (
        <>
            <div className="container">
                <h1>HWA</h1>
                <MainTable data={data} refresh={triggerRefresh}/>
                <Create refresh={triggerRefresh}/>
            </div>
        </>
    );
}

export default Hobby;