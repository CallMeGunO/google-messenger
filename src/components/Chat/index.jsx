import React from "react"
// import { firebase } from 'firebase'
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc, orderBy } from "firebase/firestore"
import Body from "../../uiComponents/Body"
import Button from "../../uiComponents/Button"
import Loader from "../Loader"
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollectionData } from "react-firebase-hooks/firestore"
import useInput from "../../hooks/useInput"

import "./styles.css"

const Chat = () => {
    const auth = getAuth()
    const firestore = getFirestore()

    const message = useInput("")
    const [user] = useAuthState(auth)

    const [messages, loading] = useCollectionData(
        collection(firestore, "messages")
    )

    const sendMessage = async () => {
        addDoc(collection(firestore, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            message: message.value,
            createdAt: new Date(),
        })
        message.value = ""
        console.log(messages)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Body column>
            <div className='chat-messages'>
                {messages
                    .sort((a, b) => {
                        return (
                            new Date(a.createdAt.seconds) -
                            new Date(b.createdAt.seconds)
                        )
                    })
                    .map((item) => {
                        const date = new Date(item.createdAt.seconds)
                        console.log(date.getDay())
                        return (
                            <div
                                key={item.uid}
                                className={`message-container ${
                                    item.uid === user.uid ? "my-message" : ""
                                }`}
                            >
                                <div>{`Sent at ${date.getHours()}:${date.getMinutes()}`}</div>
                                <div className='message-userinfo'>
                                    <img src={item.photoURL} alt='' />
                                    {item.displayName}
                                </div>
                                <div className='message-text'>
                                    {item.message}
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className='chat-controls'>
                <input className='chat-input' type='text' {...message} />
                <Button handler={sendMessage}>Send</Button>
            </div>
        </Body>
    )
}

export default Chat
