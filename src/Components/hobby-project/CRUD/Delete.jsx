import { Button } from "reactstrap";
import axios from "axios";

const Delete = ({id, refresh}) => {

    const handleDelete = (e) => {
        const ID = e.target.id;
        axios.delete(`http://localhost:8080/api/remove/${ID}`)
        .then((resp) => {
            refresh();
        }).catch((err) => {
            console.log(err.message);
        });
    }

    return(
        <Button color="danger" id={id} onClick={handleDelete} className="del-btn">Delete</Button>
    );
}

export default Delete;