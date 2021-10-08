import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import { PEOPLE_URL } from './constants';
import styled from 'styled-components';

const StyleApp = styled.div`
  // COME BACK LATER
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [charId, setCharId] = useState(null);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect ( () => {
    axios.get(PEOPLE_URL)
      .then ( response => {
        setCharacters(response.data);
      })
      .catch ( error => {
        console.log('ERROR: ', error);
      })
  }, [])


  if (characters.length === 0) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters}/>
    </div>
  );
}

export default App;

/* STRETCH 
  // ORIGINALLY WAS GOING TO ADD A BUTTON,
  // WILL WORK ON LATER

  function openDetails (name, charUrl) {
    console.log('OPEN DETAILS: ', name);
    setCharId(charUrl);
  }
  function closeDetails () {
    setCharId(null);
  }
  ------------------
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char => {
          return (
              <div className='characterList'>
                <h3>{char.name}</h3>
                <button onClick={ () => openDetails(char.name, char.url)}>Use the Force</button>
              </div>
          )
        })
      }
      { 
        charId && <Character charId={charId} closeDetails={closeDetails} />
      }
      
    </div>
  );
  */