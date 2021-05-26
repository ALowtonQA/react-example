
const Search = ({addItem, submitHandler, addHandler}) => {
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter Item:" onChange={addItem}></input>
            <button type="submit" onClick={addHandler}>Add Product</button>
        </form>
    );
}

export default Search;