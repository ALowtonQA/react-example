import Child from "./child";

const Parent = () => {
    return (
        <>
            <h1> Parent </h1>
            <Child name="This was inherited"/>
        </>
    );
}

export default Parent;