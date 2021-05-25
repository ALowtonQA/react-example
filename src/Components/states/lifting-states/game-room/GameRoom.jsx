
const GameRoom = ({players}) => {
    return(
        <ul>
            {players.map((name, i) => (
                <li key={i}>
                    {name}
                </li>
            ))}
        </ul>
    );
}

export default GameRoom;