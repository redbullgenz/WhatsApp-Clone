import React, { useState, useEffect, useRef } from 'react'
import {Timestamp, limit, query, orderBy, FieldValue, collection, addDoc, getDocs, getDoc, doc, docRef, docSnap, document, FieldPath, documentId } from "firebase/firestore";
import styles2 from './scss/Chat.module.css'

import { db } from './firebase-config';


import { UserAuth } from './context/Context';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function Chat() {



  const messagesRef = collection(db, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(q, { idField: 'id' });


  const { user } = UserAuth();
  const [users, setUsers] = useState([]);
  const [chatihn, setchatzuIhn] = useState("");
  const [message, setMessage] = useState("");
  const nachrichtDatavonIhn = collection(db, "users", user.uid, "unfiIZzkvaRj1P64OuCC1ULzb9I3", "Chat", "Message")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(nachrichtDatavonIhn);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getUsers()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "users", user.uid, "unfiIZzkvaRj1P64OuCC1ULzb9I3", "Chat", "Message"), {
      message_mir: message,
      createdAt: Timestamp.fromDate(new Date()),
    });
    //alert('Added');
    setMessage("");
  }

  const title2 = useRef();

  return (

    <main className={styles2.main}>
      <div className={styles2.chat_verlauf}>
        
    
            <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
            </div>
    

        <form onSubmit={handleSubmit} className={styles2.message_sender}>

          <input
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Nachrict schreiben"
            name="produkt"
            value={message}
            ref={title2}

          ></input>
          <button disabled={!message} type="submit">X</button>
        </form>
      </div>

    </main>
  )
}


function ChatMessage(props) {
  const { user } = UserAuth();
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === user.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}
