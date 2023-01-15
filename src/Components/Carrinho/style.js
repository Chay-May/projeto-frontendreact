import styled from "styled-components";

export const StyleText = styled.p`
width: 1vw;
color: #400D51;
`
export const StyleDelet = styled.button`
border: none;
background-color: none;
color: red;
transition: transform 100ms ease-in-out; //velocidade que o card sobe
&:hover{
    transform: scale(1.05) //animação do card
}
`

export const ContainerCarrinho = styled.div`
background: lightgreen;
display: flex;
margin: 0 auto;
padding: 50px;
width: 100%;
`

export const Total = styled.p`
background: lightgrey;
`
