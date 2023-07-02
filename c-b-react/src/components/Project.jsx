// function Project(props) {
// let { title, description } = props  // object desctructuring...

import { DeleteButton, EditButton as EditButtonTwo } from "./Buttons"


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
        
        <EditButtonTwo/>
        <DeleteButton/>

    </div>
}

/* default export */
export default Project