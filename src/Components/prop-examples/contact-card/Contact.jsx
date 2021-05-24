import Card from "./Card";
import smiley from "../../../imgs/smiley.jpg";
const Contact = () => {
    return (
        <div className="contacts">
            <Card
                image={smiley}
                name="Anoush"
                phone={12345678} 
            />
        </div>
    );
}

export default Contact;