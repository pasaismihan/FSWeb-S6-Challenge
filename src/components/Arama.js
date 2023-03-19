import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScArama = styled.div`
input {
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    padding: 1rem;
    color: black;
    border: 0.2rem solid black;
    width: 30%;
    background: rgba(0,0,0,0.2);
    border-radius: 1rem;
    cursor: pointer;
}
input::placeholder{
    font-family: 'Press Start 2P', cursive;
    font-size: 1rem;
    color: black;
}
`

export default function Arama({karakterler, setKarakterler, ilkKarakterler}) {
    const [arama, setArama] = useState("")
    useEffect(() => {
        if (arama.length > 0) {setKarakterler(karakterler.filter(item => item.name.toLowerCase().includes(arama.toLowerCase())))}
        else {setKarakterler(ilkKarakterler)}
    },[arama])

    return (
        <ScArama>
            <input placeholder="Search..." onChange={(event => setArama(event.target.value))}/>
            {console.log(arama)}
        </ScArama>
    )
}