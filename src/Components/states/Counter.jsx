import { useEffect, useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = () => {

    // 1. Count    - Stateful Value
    // 2. setCount - A function to update the stateful value
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(x => x+1);
    }

    // useEffect(() => {
    //     incrementCount();
    // }, []);

    return (
        <>
            <ChildCounter count = {count}/>
            <p>The current value of the counter is {count}</p>
            <button onClick={incrementCount}>++</button>
        </>
    );
}

export default Counter;