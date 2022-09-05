import React from "react"

const Body = ({ children, column }) => {
    return (
        <div
            style={{ height: window.innerHeight - 65 }}
            className={`centered-flex ${column && "column"}`}
        >
            {children}
        </div>
    )
}

export default Body
