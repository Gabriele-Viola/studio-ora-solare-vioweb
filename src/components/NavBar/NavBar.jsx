import { NavLink } from 'react-router-dom'
import './NavBarStyle.css'
export default function NavBar() {
    return (
        <div className="nav">
            <ul className='leaft-Nav'>
                <li>
                    <NavLink>this is us</NavLink>
                </li>
                <li>
                    <NavLink>events in milan</NavLink>
                </li>
                <li>
                    <NavLink>project</NavLink>
                </li>
                <li>
                    <NavLink>discover the evolution of our designs over the past weeks</NavLink>
                </li>
            </ul>
            <ul className='right-Nav'>
                <li>
                    <NavLink>archive</NavLink>
                </li>
                <li>
                    <NavLink>contact us</NavLink>
                </li>
                <li>
                    <NavLink>store *Close</NavLink>
                </li>

            </ul>
        </div>
    )
}