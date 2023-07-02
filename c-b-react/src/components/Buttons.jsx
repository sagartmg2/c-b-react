
/* named export */
export function EditButton() {
    let btnStyle = {
        backgroundColor: "gray",
        color: "white",
    }
    return <button style={btnStyle}>edit</button>
}
/* named export */
export function DeleteButton() {
    return <button style={{ backgroundColor: "red", color: "white" }}  >delete</button>
}


/* 
export default { 
    Editbutton: EditButton,
    DeleteButton: DeleteButton
 }
 */