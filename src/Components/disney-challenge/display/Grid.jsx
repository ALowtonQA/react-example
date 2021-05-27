import { useEffect, useState } from "react";
import PrintImages from "./PrintImages";

const Grid = ({data}) => {

    const [ready, setReady] = useState(false);
    const [objArray, setObjArray] = useState([]);

    useEffect(() => {
        const one = data.splice(0, 10);
        const two = data.splice(0, 10);
        const three = data.splice(0, 10);
        const four = data.splice(0, 10);
        const five = data.splice(0, 10);
        setObjArray([one, two, three, four, five]);
        setReady(true);
    },[]);

    if (ready) {
        return(
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {objArray.map((ten, i) => (
                        <tr key={i}>
                            <PrintImages objects={ten}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
}

export default Grid;