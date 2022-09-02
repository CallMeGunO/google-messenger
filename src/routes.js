import Login from "./components/Login"
import Chat from "./pages/Chat"
import { LOGIN_ROUTE, CHAT_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Login />,
    },
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        element: <Chat />,
    },
]
