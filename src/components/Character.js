// Write your Character component here
import React  from "react";
import styled from 'styled-components';

const StyledList = styled.div`

  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 10px;
  // border: 2px black solid; // <<<<<<<<<<<<<
  // border-radius: 10px;
  // background-color: ${props => props.theme.divBgColor};

  .container {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 10px 0;
    border: 1px ${props => props.theme.primaryColor} solid;  // 
    border-radius: 10px;
    background-color: ${props => props.theme.divBgColor};
    opacity: 50%;
  }
  .container:hover {
    background-color: ${props => props.theme.divBgColor};
    opacity: 100%;
  }

  h2 {
    //border: 1px green solid;  // <<<<<<<<<<<<<
    color: ${props => props.theme.secondaryColor};
  }
 


`


function Character(props){
    const characters = props.characters;
    console.log('Character.JS: ', characters);
    
    return (
        <StyledList> 
            {characters.map(char => {
                return (
                    <div className='container'>
                        <h2>{char.name}</h2>
                        <h2>{char.birth_year}</h2>
                    </div>
                )})
            }
        </StyledList>
    )
}

export default Character;
