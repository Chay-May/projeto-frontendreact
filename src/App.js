import "./App.css";
import Main from "./Componets/Main";
import NavBar from "./Componets/NavBar";
import Header from "./Componets/Header";
import { GlobalStyled } from "./GlobalStyled";

function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <Header />
      <NavBar />
      <Main />

    </div>
  );
}

export default App;
