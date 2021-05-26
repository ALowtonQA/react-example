import { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

        console.log(music.id);

        axios.put(`http://localhost:8080/api/update/${music.id}`, obj)
            .then((resp) => {
                toggle();
                refresh();
            }).catch((err) => {
                console.error(err);
            });
    }

    return (
        <>
            <Button color="primary" id={music.id} className="edit-btn" onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Entry</ModalHeader>
                <ModalBody>
                    <div id="form-div">
                        <Form>
                            <FormGroup>
                                <Label>Type</Label>
                                <Input type="text" className="form-control" placeholder="Type" autoComplete="off" value={type} onChange={(e) => setType(e.target.value)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" className="form-control" placeholder="Name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Artist</Label>
                                <Input type="text" className="form-control" placeholder="Artist" autoComplete="off" value={artist} onChange={(e) => setArtist(e.target.value)}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Year</Label>
                                <Input type="text" className="form-control" placeholder="Year" autoComplete="off" value={year} onChange={(e) => setYear(e.target.value)}></Input>
                            </FormGroup>
                        </Form>
                    </div>
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