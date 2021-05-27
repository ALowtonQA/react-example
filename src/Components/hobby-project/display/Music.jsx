import Delete from "../CRUD/Delete";
import Update from "../CRUD/update/Update";

const Music = ({music, refresh}) => {
    return (
        <>
            <td>{music.id}</td>
            <td>{music.type}</td>
            <td>{music.name}</td>
            <td>{music.artist}</td>
            <td>{music.year}</td>
            <td>
                <Delete id={music.id} refresh={refresh}/>
                <Update music={music} refresh={refresh}/>
            </td>
        </>
    );
}

export default Music;