import { Link } from "react-router-dom";
import './../styles/components/Navbar.scss'
export default function NavBar() {

    return <nav id="navbar">
        <Link class="navbar-link" to="/">Dashboard</Link>
        <Link class="navbar-link" to="/goals">Goals</Link>
        <Link class="navbar-link" to="/history">History</Link>
        <Link class="navbar-link" to="/profile">Profile</Link>
    </nav>
}