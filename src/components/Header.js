import styled from "styled-components";

const ScHeader = styled.header`
h1 {
    margin: 1rem;
	font-size: 5rem;
    font-style: italic;
	text-shadow: -2px -2px 0 #ff6, 2px -2px 0 #ff6, -2px 2px 0 #ff6, 2px 2px 0 #ff6;
}
`

export default function Header({karakterler}) {
    return (
    <ScHeader>
      {karakterler.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <h1>STAR&nbsp;&nbsp;&nbsp;WARS</h1>
      )}
    </ScHeader>
    )
}