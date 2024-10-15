import React from 'react'
import Navbar from './component/Navbar'
import PostsList from './component/PostsList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'
          element={<div>
            <AddPostForm/>
            <PostsList />
          </div>} />
      </Routes>
    </Router>
  )
}
export default App