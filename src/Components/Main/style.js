import styled from "styled-components";

export const StyleMain = styled.div`
  display: flex;
  background-color: white;
  margin-top: 1rem;
  width: 100vw;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
  .button {
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
    width: 200px;
    padding: 10px;
    :hover {
      background-color: black;
      color: white;
    }
    margin-bottom: 10%;
    margin-left: 10%;
  }
  .tagP {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const StyleGaleria = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 73rem;
  justify-content: center;
  align-items: center;
`;

export const StyleCarrinho = styled.div`
  /* display: flex; */
  padding-top: 0.8rem;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  margin-top: 5%;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;
