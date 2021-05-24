import AddressInfo from "./AddressInfo";
import CompanyInfo from "./CompanyInfo";

const UserCard = (props) => {
    const {id, name, username, email, address, phone, website, company} = props;

    return (
        <div className="card">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <AddressInfo {...address}/>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <CompanyInfo {... company}/>
        </div>
    );
}

export default UserCard;