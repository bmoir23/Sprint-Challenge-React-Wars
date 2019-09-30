import React from 'react';
import styled from 'styled-components';
import CharInfo from '../CharInfo/CharInfo';


const Card = styled.div `
    width: 500px;
    margin: 10px;
    display: flex;
    border: 2px solid black;
    background-color: white;

    &:hover {
        background-color: grey;
        pointer: cursor;
    }
    `;

const Name = styled.h3 `
    text-align: center;
    width: 45%;
    align-self: center;
    `;

const CharCard = (props) => {
    return ( 
        <Card >
        <Name> { props.char.name } </Name>    
        <CharInfo info = { props.char }/>
        </Card>
    )
}

export default CharCard;