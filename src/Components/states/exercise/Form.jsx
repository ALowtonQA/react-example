import {useState} from "react";

const Form = () => {
    const [uname, setUname] = useState("");
    const [pword, setPword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const DATA_TO_SEND = JSON.stringify({uname, pword});
        console.log(DATA_TO_SEND);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label> Username </label>
                <input 
                    name = "uname"
                    value = {uname}
                    onChange = {(e) => setUname(e.target.value)}
                />
                <label> Password </label>
                <input 
                    name = "pword"
                    value = {pword}
                    onChange = {(e) => setPword(e.target.value)}
                />
            <button type="submit"> Submit </button>
            </form>
        </>
    );
}

export default Form;