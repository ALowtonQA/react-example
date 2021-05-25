import { useState } from "react";

const Conditional = () => {
    const [edit, setEdit] = useState(false);

    return (
        <>
            <h1> The value is: </h1>
            <p> {edit? "True" : "False"} </p>
            <button onClick={() => setEdit(x => !x)}>Change State</button>
        </>
    );
}

export default Conditional;