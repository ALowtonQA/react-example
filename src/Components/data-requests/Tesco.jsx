import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./Employee";

const Tesco = () => {

    const [data, setData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("https://reqres.in/api/users")
        .then((res) => {
            setData(res.data.data);
        }).catch((err) => {
            console.log(err.message);
        });
    });

    return (
        <>
            <h1>Welcome</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((emp) => (
                        <tr>
                            <Employee person={emp}/>
                        </tr> 
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Tesco;