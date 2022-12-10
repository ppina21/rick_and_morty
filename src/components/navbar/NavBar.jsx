import React from 'react'
import style from "./NavBar.module.css"
import SearchBar from "../searchbar/SearchBar";
import { Link } from 'react-router-dom';


export default function NavBar({ onSearch }) {
  return (
         
      <div className={style.container}>
        <span className={style.navlogo}>Rick and Morty</span>
      <div>
          <Link to="/home" className={style.home}>Home</Link>
           
      </div>
           <div>
             <Link to="/about" className={style.about}>About</Link>
           </div>

        <SearchBar onSearch={onSearch} />

      </div>
  )
}
