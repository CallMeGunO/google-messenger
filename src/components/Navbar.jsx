import React from "react"
import { Link } from "react-router-dom"
import { LOGIN_ROUTE } from "../utils/consts"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"
import Nav from "../uiComponents/Nav"
import Button from "../uiComponents/Button"

const Navbar = () => {
    const auth = getAuth()
    const [user] = useAuthState(auth)

    return (
        <div>
            <Nav>
                <div className='centered-flex' style={{ width: "80%" }}>
                    {user?.email}
                </div>
                <div className='centered-flex' style={{ width: "20%" }}>
                    {user ? (
                        <Button
                            secondary
                            handler={() => {
                                auth.signOut()
                            }}
                        >
                            Exit
                        </Button>
                    ) : (
                        <Link to={LOGIN_ROUTE}>
                            <Button secondary>Log in</Button>
                        </Link>
                    )}
                </div>
            </Nav>
        </div>
    )
}

export default Navbar
