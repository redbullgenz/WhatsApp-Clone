import React, { useState, useEffect } from 'react'
import styles from './scss/Main.module.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from './Login';
import Chat from './Chat';
import { AuthContextProvider } from './context/Context';
import ProtectedRoute from './components/ProtectedRoute';
import { auth } from './firebase-config';

function App() {
  



  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div>
      <AuthContextProvider>
     
      <div className={styles.container}>
      
     
      <Routes >
            <Route exact path="/" activeClassName="selected" element={<Login />} />
      </Routes >
      <Routes >
            <Route path="/Chat" activeClassName="selected" element={<ProtectedRoute><Chat/></ProtectedRoute>} />
      </Routes >
      </div>
      </AuthContextProvider>
    </div>
  );
}

export default App;
