import './Post.css'
function Post({ id, title, body, userId, deletePost }) {
    return (
        <li className="post">
            <span>User id: {userId}</span>
            <h2>{title}</h2>
            <p>{body}</p>
            <span>Post id: {id}</span>
            <button className="post-button-delete" onClick={deletePost}>
                Delete this is post
            </button>
        </li>
    )
}

export default Post
