import './Post.css'

function Post({ body, id, title, userId }) {
    return (
        <div className="post">
            <h3>{body}</h3>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h3>{userId}</h3>
        </div>
    )
}

export default Post
