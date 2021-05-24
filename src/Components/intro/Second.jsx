
const Second = () => {
    const NAME = "Anoush";
    const DATE = new Date();

    return (
        <>
            <h1> Here is another element! </h1>
            <p>{NAME}</p>
            <p>{DATE.toLocaleDateString()}</p>
        </>
    )
}

export default Second;