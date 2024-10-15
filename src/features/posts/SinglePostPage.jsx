import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function SinglePostPage() {
    const { postId } = useParams()
    const navigate = useNavigate()
    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )
    if (!post) {
        return (
            <section>
                <h2>Post Note Found</h2>
            </section>
        )
    }

    return (
        <div> <section>
            <article className="post">
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link> 
                <button onClick={()=>navigate('/')}> Go Back To Home</button>
            </article>
        </section></div>
    )
}
