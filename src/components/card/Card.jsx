import style from "./Card.module.css"
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
      
      <div className={style.container}>
         
         
            <img className={style.imagen} src={props.image} alt="" />
         

            
               <div className={style.text}>
               <Link
               to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
               </Link>
            
               <h3>{props.species}</h3>
               <h3>{props.gender}</h3>
               
               </div>
              
            <button className={style.boton}  onClick={props.onClose}>X</button>
        
      </div>
   );
}
