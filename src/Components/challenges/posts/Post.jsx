import Posts from "../static/Posts.json";
import PostCard from "./PostCard";

const Post = () => {
    return (
        <div className="Posts">
            {Posts.map((post, i) => (
                <PostCard
                    key = {i}
                    {... post}
                />
            ))};
        </div>
    );
}

export default Post;