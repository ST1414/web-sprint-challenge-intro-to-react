import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import { PEOPLE_URL } from './constants';
import styled from 'styled-components';

// -----------------------------------------------------
// (1) Import useState & useEffect XXX
// (2) Import Axios to make get call XXX
// (3) Import Character (singular) from Components XXX
// (4) Make a 'constants' folder + file for API key  XXX
// (5) Import constants URL from 'constants' XXX
// (6) Import styled elements

// Create states (how many???)
// Make API call and console.log
// Wrap API call in useEffect (to run on initial for now, eventually character ID)

// Create custom style
// Replace existing JSX with call to <Characters/>
// Wrap call to <Characters> with Customer Styles tag

// Create character.js file
// -----------------------------------------------------

const StyleChar = styled.div`
  // COME BACK LATER
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([null]);
  const [charId, setCharId] = useState([null]);

  function openDetails (id) {
    setCharId = id;
  }
  function closeDetails (id) {
    setCharId = null;
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect ( () => {
    axios.get(PEOPLE_URL)
      .then ( response => {
        console.log('RESPONSE: ', response.data);
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
      {console.log('IN RETURN: ', characters)}
      {
        characters.map(char => {
          return (
            <div className='characterList'>
              <h3>{char.name}}</h3>
              <button onClick={ () => openDetails(char.id)}>Use the Force</button>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;


// { 
//   characters.map( char => {
//     return (
//       <div className='characterList'>
//         <h3>{char.name}</h3>
//         <button onClick={ () => openDetails(char.id)}>Use the Force</button>
//       </div>
//     )
//   })
// }
// {/* { 
//   charId && <Character charId={charId} closeDetails={closeDetails} />
// } */}