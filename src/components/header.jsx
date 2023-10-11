import { NavLink,Link } from "react-router-dom";
import avatar from '../assets/images/avatar.png'
export default function Header() {
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

  return (
    <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink 
                to="/host"
                className={({isActive}) => isActive ? "active-link" : ''}
            >
                Host
            </NavLink>
            <NavLink 
                to="/about"
                className={({isActive}) => isActive ? "active-link" : null}
            >
                About
            </NavLink>
            <NavLink 
                to="/vans"
                className={({isActive}) => isActive ? "active-link" : null}
            >
                Vans
            </NavLink>
            <NavLink 
                to="/login"
                className={({isActive}) => isActive ? "active-link" : null}
            >
                <img src={avatar} alt="" />
            </NavLink>
            <button onClick={fakeLogOut}>X</button>

        </nav>
    </header>
)
}
