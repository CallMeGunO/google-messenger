import React from "react"
import { Link } from "react-router-dom"
import Button from "../Button"
import NavbarLink from "./NavbarLink"
import { LOGIN_ROUTE } from "../../utils/consts"
import "./styles.css"

const Navbar = () => {
    const user = false

    return (
        <div className='navbar-container'>
            <div className='navbar-links'>
                <NavbarLink title='Chat' />
                <NavbarLink title='Page2' />
            </div>
            <div className='navbar-buttons'>
                {user ? (
                    <Link to={LOGIN_ROUTE}>
                        <Button title='Login' />
                    </Link>
                ) : (
                    <Button title='Exit' />
                )}
            </div>
        </div>
    )
}

export default Navbar
