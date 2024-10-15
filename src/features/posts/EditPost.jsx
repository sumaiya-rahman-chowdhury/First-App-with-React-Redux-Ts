import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { postUpdated } from './postsSlice'

export default function EditPost() {

    const { postId } = useParams()
    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    //   
    function onHandleSave(e) {
        e.preventDefault()
        const form = e.target;
        const title = form.postTitle.value
        const content = form.postContent.value
        if(title && content){
            dispatch(postUpdated({id:post.id,title,content}))
            navigate(`/posts/${postId}`)
        }
    }



    return (
        <div><section>
            <h2>Edit Post</h2>
            <form onSubmit={onHandleSave}>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    defaultValue={post.title}
                    required
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    defaultValue={post.content}
                    required
                />

                <button>Save Post</button>
            </form>
        </section></div>
    )
}
