import React from 'react'
import { useAppDispatch } from '../../app/hooks'
import {Post, postAdded} from '../posts/postsSlice'
import { nanoid } from '@reduxjs/toolkit'

function AddPostForm() {

    const dispatch = useAppDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target ;
        const title = form.postTitle.value;
        const content = form.postContent.value ;

        const newPost  = {
            id:nanoid(),
            title,
            content
        }
        dispatch(postAdded(newPost))
        form.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" id="postTitle" defaultValue="" required />
            <label htmlFor="postContent">Content:</label>
            <textarea
                id="postContent"
                name="postContent"
                defaultValue=""
                required
            />
            <button>Save Post</button>
        </form>
    )
}

export default AddPostForm 
