import React, { useState } from 'react'
import { validation } from './validation';    
import style from "./Forms.module.css"


export default function Forms(props) {
    
  

    const [errors, setErrors] = useState({ username: "", password: "", })

    const [userData, setUserData] = useState({ username: "", password: "", });

    const handleInputChange = (e) => {
        setErrors(validation({ ...userData, [e.target.name]: e.target.value }))
        setUserData({ ...userData, [e.target.name]: e.target.value });
        
    }
     
    function handleSubmit(e){
    e.preventDefault();
    props.login(userData);
    }
    
    
    
        
  return (
      <div>
          <form onSubmit={handleSubmit} className={style.forms}>
              <label htmlFor="username" className={style.label}>Username:</label>
          <input className={style.input}
              id="username"
              name="username"
              placeholder='Ingrese el username'
              type="text"
              value={userData.username}
              onChange={handleInputChange}
          />
          <p>{errors.username}</p>

          <label htmlFor="password" className={style.label}>Password:</label>
          <input className={style.input}
              id="password"
              name="password"
              placeholder='Ingrese la contraseña'
              type="password"
              value={userData.password}
              onChange={handleInputChange}
          />
          <p>{errors.password}</p>

          <button className={style.boton}>Registrarse</button>
          </form>
          
      </div>
  )
}
