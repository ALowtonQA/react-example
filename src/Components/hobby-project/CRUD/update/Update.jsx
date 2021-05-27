import { useState } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UpdateForm from "./UpdateForm";

const Update = ({ music, refresh }) => {

    const [modal, setModal] = useState(false);
    const [type, setType] = useState(music.type);
    const [name, setName] = useState(music.name);
    const [artist, setArtist] = useState(music.artist);
    const [year, setYear] = useState(music.year);

    const toggle = () => {
        setModal(!modal);
    }

    const handleUpdate = () => {
        let obj = {
            "id": music.id,
            "name": name,
            "artist": artist,
            "year": year,
            "type": type
        };

        axios.put(`http://localhost:8080/api/update/${music.id}`, obj)
            .then((resp) => {
                toggle();
                refresh();
            }).catch((err) => {
                refresh();
                console.error(err);
            });
    }

    return (
        <>
            <Button color="primary" id={music.id} className="edit-btn" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Entry</ModalHeader>
                <ModalBody>
                    <UpdateForm 
                        type={type} setType={setType}
                        name={name} setName={setName}
                        artist={artist} setArtist={setArtist}
                        year={year} setYear={setYear}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>Update</Button>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Update;