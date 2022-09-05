import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../routes"
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts"
import { useAuthState } from "react-firebase-hooks/auth"
import { getAuth } from "firebase/auth"

const AppRouter = () => {
    const [user] = useAuthState(getAuth())

    console.log(user)

    return user ? (
        <Routes>
            {privateRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} exact={true} />
            ))}
            <Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} exact={true} />
            ))}
            <Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
        </Routes>
    )
}

export default AppRouter
