import { useEffect } from "react";

const UseEffect = ({ name }) => {

    useEffect(() => {
        document.title = {name};
    }, [name]);

    return (
        <div>
            {name}
        </div>
    );
}

export default UseEffect;