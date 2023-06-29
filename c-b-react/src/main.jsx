import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles.css"

// we call this a Prduct Component
let Project = function (props) {
  return <div>
    <img src="https://picsum.photos/100/100" />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <header>
      <nav>
        <ul>
          <li><a className="active" href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </nav>
    </header>
    <hr />
    <main>
      <div>
        sum:{1 + 2}
      </div>
      <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt amet perferendis illum debitis totam nulla omnis dicta distinctio perspiciatis commodi dolor quis, voluptas quibusdam odio, consequatur mollitia! Velit, optio!
      </p>
    </main>
    <hr />
    <h2>Projects</h2>
    <div className="projects">
      {/* in normal function we call the function   Produject("one") 
            but in react, 
            we pass props in Components 
      */}
      <Project title="one" description = "des-one"/>  
      <Project title="two" description = "des-two"/>  
      <Project title="three" description = "des-theree"/>  
    </div>






  </React.StrictMode>,
)
