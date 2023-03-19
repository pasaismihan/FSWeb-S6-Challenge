import React, { useState } from "react";
import styled from "styled-components";

const ScKarakter = styled.div`
div {
    border: 0.2rem solid black;
    font-family: 'Press Start 2P', cursive;
    text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
    max-width: 50%;
    margin: 2rem auto;
    background: rgba(0,0,0,0.2);
    font-size: 2rem;
    border-radius: 1rem;
    cursor: pointer;
}
h2 {
    font-size: 1.5rem;
}
h2:hover {
    transition: scale 1s;
    scale: 1.2;
}
li {
    padding: 0.5rem;
    font-size: 1rem;
    list-style-type: none;
}
`




export default function Karakter({karakterler}) {

    const [selected, setSelected] = useState(null);
    
    function toggle(index) {
        if (index === selected) {
            setSelected(null)
        }
        else {setSelected(index)}
    }

    return (
        <ScKarakter>
            {karakterler.map((element, index) => (
                <div key={index} onClick={() => toggle(index)}>
                    <h2>
                        {element.name}
                    </h2>
                    { index === selected && (
                    <ul>
                        <li>Gender: {element.gender}</li>
                        <li>Height: {element.height}</li>
                        <li>Mass: {element.mass}</li>
                        <li>Birth Year: {element.birth_year}</li>
                        <li>Eye Color: {element.eye_color}</li>
                        <li>Hair Color: {element.hair_color}</li>
                        <li>Skin Color: {element.skin_color}</li>
                    </ul>
                    )}
                </div>
            ))}
        </ScKarakter>
    )
}