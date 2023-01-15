import styled from "styled-components";

export const Div = styled.div`
  /* height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center; */
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20%;
  text-align: center;

  .Button {
    /* background-color: #6795bc; */
    border-radius: 8px;
    padding: 16px;
    width: 200px;
    border: none;
    color: #243763;
    margin-top: 32px;
    cursor: pointer;
    :hover {
      background-color: #540375;
      color: white;
    }
  }
`;

export const Titulo = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: #540375;
`;

// export const Button = styled.button`
//   background-color: #6795BC;
//   border-radius: 8px;
//   padding: 16px;
//   width: 200px;
//   border: none;
//   color: #FF7000;
//   margin-top: 32px;
//   cursor: pointer;
//   :hover{
//         background-color: black;
//         color: white;
//     }

// `;
