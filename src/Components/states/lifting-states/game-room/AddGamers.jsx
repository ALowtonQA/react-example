
const AddGamers = ({newPlayer, submitHandler, addHandler}) => {
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter name:" onChange={newPlayer}/>
            <button type="submit" onClick={addHandler}> Add Player </button>
        </form>
    );
}

export default AddGamers; 