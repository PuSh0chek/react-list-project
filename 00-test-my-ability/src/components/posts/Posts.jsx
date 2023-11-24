import { useEffect, useState } from 'react'
import Post from './Post'
import './Post.css'
function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(() => {
        JSON.parse(localStorage.getItem('postsList')) ||
            fetch(API_URL)
                .then((response) => response.json())
                .then((json) => setPosts(json))
                .catch((error) => setError(error.message))
                .finally(() => setIsLoading(false))
    }, [])

    if (error) {
        return <h2>{error}</h2>
    }

    const deletePost = (index) => {
        const postsListAfterRemove = [...posts]
        postsListAfterRemove.splice(index, 1)
        setPosts(postsListAfterRemove)
        localStorage.setItem('postsList', JSON.stringify(postsListAfterRemove))
    }

    return (
        <section>
            <h1 className="preview">Post list</h1>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                <ul className="post-list">
                    {posts.map(
                        ({ id, title, body, userId }, index) =>
                            id < 10 && (
                                <Post
                                    key={id}
                                    id={id}
                                    title={title}
                                    body={body}
                                    userId={userId}
                                    deletePost={() => deletePost(index)}
                                />
                            )
                    )}
                </ul>
            )}
        </section>
    )
}

export default Posts
