import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import AppRouter from "./components/AppRouter"
import "./App.css"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"
import Loader from "./components/Loader"
import Nav from "./uiComponents/Nav"

const App = () => {
    const [user, loading, error] = useAuthState(getAuth())

    if (loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            {/* <Nav>TextNav</Nav> */}
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
