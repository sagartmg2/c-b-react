import { Link } from "react-router-dom"

function Header() {
    return <header>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/users">users</Link>
            </li>
        </ul>
    </header>
}

export default Header