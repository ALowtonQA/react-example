
const DisplayProducts = ({basket, deleteHandler}) => {
    return (
        <ul>
            {basket.map((item, i) => (
                <li key={i}>
                    {item}
                    <button id={i} onClick={deleteHandler}>Delete</button> 
                </li>
            ))}
        </ul>
    )
}

export default DisplayProducts;