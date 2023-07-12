import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';


import { auth } from './firebase-config';
import styles from './scss/Login.module.css';
import { UserAuth } from './context/Context';

const Login = () => {

  const [email, setEmail] = useState('albert@live.it');
  const [password, setPassword] = useState('maria123');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
          navigate('/Chat')
        } catch (e) {
          setError(e.message)
          console.log(e.message)
        }
      };

  return (
    <div>
   
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <label>Login</label>
            <input  placeholder="albert@live.it"  type="email" onChange={(e) => setEmail(e.target.value)} ></input>
            <label  >Password</label>
            <input placeholder="maria123" type="password" onChange={(e) => setPassword(e.target.value)} ></input>
            <button >Collegati</button>
            <Link to='/Logup' className={styles.link}>Non hai un account?<span>Registrati</span></Link>
            <p>Or</p>
            <div>
                With google
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login