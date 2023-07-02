import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles.css"
import CustomHeader from './components/Header'
import Project from './components/Project'
import Course from './components/Course'
import Todos from './components/Todos'
import Counter from './components/Counter'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div>
    <CustomHeader />
    <hr />
    <Counter/>
    <hr />

    <h1>projects</h1>
    <div className="projects">
      <Project
        title="git"
        description="lorem ipsum ....."
        image="https://www.20i.com/blog/wp-content/uploads/2022/08/git-blog-header-740x416.png"
      />
      {/* title here is known as props rather than attribute */}
      <Project
        title="node"
        description="node description"
        image="https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/1200px-Node.js_logo.svg.png"
      />
    </div>

    <hr />

    <h2>Courses</h2>
    <div className="courses">
      <Course />
      <Course />
      <Course />

    </div>

    <hr />
    <Todos />
  </div>


  // </React.StrictMode>,
)
