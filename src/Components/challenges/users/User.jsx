import Users from "../static/Users.json"
import UserCard from "./UserCard";

const User = () => {
    return (
        <div className="Users">
            {Users.map((user, i) => (
                <UserCard
                    key = {i}
                    {... user}
                />
            ))};
        </div>
    );
}

export default User;