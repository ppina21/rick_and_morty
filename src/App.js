import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Cards from './components/cards/Cards.jsx'
import NavBar from './components/navbar/NavBar'
import About from './components/about/About'
import Detail from "./components/detail/Detail.jsx"
import Forms from './components/forms/Forms'

function App() {
  


  const location = useLocation();

  const navigate = useNavigate()

  const [characters, setCharacters] = useState([]); 

  const [access, setAccess] = useState(false);
  
  const username = "pedropina@gmail.com";

  const password = "pedro1234";

  function login (userData) {
    
    if (userData.username === username && userData.password === password) {
      setAccess(true) 
      navigate("/home")
    }

     
  };

   useEffect(() => {
   !access && navigate('/');
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [access]);

  

  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  
  const onClose = (id) => {
   setCharacters(characters.filter(character => character.id !== id))
  }


 

  return (
    <div> 
      
      <div>
       {location.pathname !== "/" &&  <NavBar onSearch={onSearch}/>}
      </div>
      
      <Routes>

        <Route path='/' element={<Forms login={login}/>}/>
        
        <Route path='/home' element={<Cards
          characters={characters}
          onClose={onClose}
        />} />

        <Route path='/about'  element={<About />} />
        
        <Route path='/detail/:detailId' element={<Detail/>}/>

      </Routes>  
      
    </div>
  )
}

export default App
