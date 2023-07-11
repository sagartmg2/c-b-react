import { Link } from "react-router-dom"

function Header(props) {
    return <nav>
        <ul style={{
            display: "flex",
            listStyle: "none",
            gap: "1rem",
            paddingLeft: "0"
        }}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">User</Link>
            </li>
            <li>
                <Link to="/users-api">UserAPI</Link>
            </li>
            <li>
                <Link to="/products">products</Link>
            </li>
            <li>
                <Link to="/carts">carts ({props.cartCount}) </Link>
            </li>
        </ul>
        <hr />
    </nav>
}

export default Header