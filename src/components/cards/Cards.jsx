import Card from '../card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters, onClose } = props;
   //console.log(characters)
   return <div className={style.container}>

      {
         
         characters.map(characters =>
            <Card
            
            key={characters.name}
            id={characters.id}
            name={characters.name}
            species={characters.species}
            gender={characters.gender}
            image={characters.image}
            onClose={() => onClose(characters.id)}
         
         
         
         />)

    }

   </div>;
}
