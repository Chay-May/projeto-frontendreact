import styled from "styled-components";


export const StyleCard = styled.div `
background-color: #EFF5F5;
display:flex;
margin-top: 2%;
/* filter: drop-shadow(0 0 0.25em #2D033B); */
flex-direction: column;
width: 270px;
height: 380px;
padding: 10px;
border: none;
box-shadow: 0 0 10px rgba(128, 0, 128, 0.3);
border-radius: 10px;
transition: transform 100ms ease-in-out; //velocidade que o card sobe
&:hover{
    transform: scale(1.05) //animação do card
}
`

export const StyleImagem = styled.img`
width: 90%;
height: 200px;
margin: 0 auto;
padding: 10px;
`

export const StyleInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-height: 350px;
`
export const StyleButton = styled.button `
    background-color: white;
      border-radius: 8px;
      cursor: pointer;
      width: 200px;
      padding: 10px;
      :hover{
          background-color: #2D033B;
          color: white;
      }
   margin-bottom: 10%;
//    margin-left: 2%;
`

export const StyleText = styled.p `
font-weight: bold;
text-align: center;
padding: 5px;
margin-top: 10px;
`