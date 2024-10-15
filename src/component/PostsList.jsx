import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
export default function PostsList() {
    const posts = useAppSelector(state => state.posts)
    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>
            {post.title}
            </h3>
            <p>{post.content.slice(0,30)}<Link to={`/posts/${post.id}`}> read more</Link></p>
        </article>
    ))
    return (
        <section>
            <div>PostsList</div>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
