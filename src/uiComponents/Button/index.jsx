import React from "react"
import "./styles.css"

const Button = ({ handler, children, secondary }) => {
    return (
        <div
            onClick={handler}
            className={`button-container ${secondary && "secondary"}`}
        >
            {children}
        </div>
    )
}

export default Button
