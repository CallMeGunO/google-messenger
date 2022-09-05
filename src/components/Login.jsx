import React from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import Button from "../uiComponents/Button"
import Body from "../uiComponents/Body"

const Login = () => {
    const auth = getAuth()

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider()

        const { user } = await signInWithPopup(auth, provider)
        console.log(user)
    }

    return (
        <Body>
            <Button handler={handleGoogleSignIn}>
                Enter with Google Account
            </Button>
        </Body>
    )
}

export default Login
