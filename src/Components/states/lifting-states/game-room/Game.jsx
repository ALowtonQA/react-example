import {useState} from "react";
import AddGamers from "./AddGamers";
import GameRoom from "./GameRoom";

const Game = () => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const newPlayer = (e) =>{
        setPlayerName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleAdd = () => {
        setPlayers(players => [...players, playerName]);
    }

    return (
        <>
            <AddGamers 
                newPlayer = {newPlayer}
                submitHandler = {handleSubmit}
                addHandler = {handleAdd}
            />
            <GameRoom players = {players}/>
        </>
    );
}

export default Game;