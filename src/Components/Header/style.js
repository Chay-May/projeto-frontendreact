import styled from "styled-components";

export const StyleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #E5B8F4;
  width: 100vw;
  margin: 0 auto;
  max-width: 100vw;
  background-image: url("https://s1.1zoom.me/b5050/789/339796-sepik_1366x768.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 30vh;
  text-align: center;
  text-shadow: 1px, 1px, 2px, #0f350a93;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  /* display: grid;
  grid-template-columns: 20% 1fr 20%;
  grid-template-rows: 20% 1fr 20%; */
`;

export const StyleInputGrup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: black;
  margin: 20 5px;
  width: 100vw;
  margin: 0 auto;
  max-width: 100vw;
`;
export const IconCar = styled.div`
  margin-right: 2%;
`;
export const Inputs = styled.div`
  /* width: 300px;
  height: 20px; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #444343;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 30px;
  gap: 10px;
`;
