import React, { createContext } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDJP-Q6yMYiQy9rsqXLpR0N6srDKKMpVPs",
    authDomain: "messenger-cc4fe.firebaseapp.com",
    projectId: "messenger-cc4fe",
    storageBucket: "messenger-cc4fe.appspot.com",
    messagingSenderId: "717845744595",
    appId: "1:717845744595:web:d57839665743c501537d26",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
