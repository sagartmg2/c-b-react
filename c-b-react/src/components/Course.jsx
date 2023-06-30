/* named import */
import { EditButton, DeleteButton } from "./Buttons"

const Course = () => {
    return <div className='course'>
        <h3>MERN</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo in natus blanditiis praesentium assumenda officiis consequuntur aspernatur voluptates impedit inventore cumque voluptate fugiat distinctio sapiente tempora, eum dolor! Consectetur, modi?</p>
        <EditButton />
        <DeleteButton />
    </div>
}

export default Course