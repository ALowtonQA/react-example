import { Form, FormGroup, Label, Input } from "reactstrap";
const UpdateForm = (props) => {
    const { type, setType, name, setName, artist, setArtist, year, setYear } = props;
    return (
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
    );
}

export default UpdateForm;