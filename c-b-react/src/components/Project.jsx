// function Project(props) {
// let { title, description } = props  // object desctructuring...

import { DeleteButton, EditButton } from "./Buttons"


function Project({ title, description, image }) {
    let btnStyle = {
        backgroundColor: "gray",
        color: "white",
    }

    return <div className="project">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
{/* 
        <button style={btnStyle}>edit</button>
        <button style={{ backgroundColor: "red", color: "white" }}  >delete</button> */}
        
        <EditButton/>
        <DeleteButton/>

    </div>
}

/* default export */
export default Project