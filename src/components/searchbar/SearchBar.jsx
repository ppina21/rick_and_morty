import style from "./SearchBar.module.css";
import { useState } from "react";
import {RiSearchEyeLine} from "react-icons/ri"

export default function SearchBar(props) {
   
   const { onSearch } = props;
   
   const [character, setCharacter] = useState("");

   const handleChange = (event) => {

      setCharacter(event.target.value)
   }
   
   return (
      <div className={style.searchBar}>
         <input className={style.input} placeholder="Buscar personaje..." type='search' value={character} onChange={handleChange} />
         <button
               className={style.button}
               onClick={() => onSearch
               (character)}><RiSearchEyeLine className={style.icon} /></button>
      </div>
   );
}
