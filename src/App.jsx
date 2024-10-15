import React from 'react'
import Navbar from './component/Navbar'
import PostsList from './component/PostsList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPostForm from './features/posts/AddPostForm'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPost from './features/posts/EditPost'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={<div>
            <AddPostForm />
            <PostsList />
          </div>} />
        <Route path='/posts/:postId' element={
          <div><SinglePostPage /></div>
        } />
        <Route path='/editPost/:postId' element={
          <EditPost/>
        }/>
      </Routes>
    </Router>
  )
}
export default App