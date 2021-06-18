import React, { useState,useEffect } from "react";
import {useLocation} from "wouter"
import useUser from '../hooks/useUser'
//import './Login.css'

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation()
  const {isLoginLoading,isLogged,login} = useUser()

  useEffect(() => {
      if (isLogged) {
        navigate('/home')
    }
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
      e.preventDefault();
      if (username.trim() === "" || password.trim() === "") {
          return alert("Complete los dos campos")
      }
    login({ username, password })
  };

  return (
      <>
          <h1>Login</h1>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            Username
            <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>
      }
    </>
  );
}