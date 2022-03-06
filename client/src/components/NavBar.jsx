import React from "react";
import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>

            <li>
                <Link to='/create'>Create your own recipe!</Link>
            </li>
        </ul>
    )
}


export default NavBar