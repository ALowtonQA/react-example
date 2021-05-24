
const Card = (props) => {
    const {image, name, phone, email} = props;
    return (
        <div className="card">
            <img src={image} height="100" width="100"/>
            <h3>{name}</h3>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Card;