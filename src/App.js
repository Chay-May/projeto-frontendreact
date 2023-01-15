import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer/";
import { GlobalStyled } from "./GlobalStyled";
import { useState } from "react";
import FinalizarCompra from "./Components/FinalizarCompra";
import useCarrinho from "./Hooks/useCarrinho";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [ordem, setOrdem] = useState("");
  const [page, setPage] = useState(1);

  const sacolaProduto = useCarrinho();

  return (
    <div>
      <GlobalStyled />
      {page === 1 ? (
        <div>
          <Header
            valorMin={valorMin}
            setValorMin={setValorMin}
            valorMax={valorMax}
            setValorMax={setValorMax}
            pesquisa={pesquisa}
            setPesquisa={setPesquisa}
            ordem={ordem}
            setOrdem={setOrdem}
            carrinho={sacolaProduto.carrinho}
          />
          <Main
            ordem={ordem}
            pesquisa={pesquisa}
            valorMin={valorMin}
            valorMax={valorMax}
            setPage={setPage}
            sacolaProduto={sacolaProduto}
          />
          <Footer />
        </div>
      ) : (
        <FinalizarCompra setPage={setPage} />
      )}
    </div>
  );
}
export default App;
