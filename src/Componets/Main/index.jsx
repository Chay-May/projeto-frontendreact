import Cards from "../Cards";
import Carrinho from "../Carrinho";
import { StyleCarrinho, StyleGaleria, StyleMain } from "./style";

function Main() {
  return (
    <StyleMain>
      <StyleGaleria>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </StyleGaleria>
      <div>
      <div>
        <h3 className="text-center">CARRINHO</h3>
        <StyleCarrinho>
          <p>Produto</p>
          <p>Qtd.</p>
          <p>Valor</p>
        </StyleCarrinho>
        <Carrinho />
      </div>
      <div className="text-center">
        <p>TOTAL: R$ 150,00</p>
      </div>
      </div>
      
    </StyleMain>
  );
}

export default Main;
