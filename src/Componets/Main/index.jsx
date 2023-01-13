import Cards from "../Cards";
import Carrinho from "../Carrinho";
import { StyleCarrinho, StyleGaleria, StyleMain } from "./style";
import produtos from "../../Produtos/produtos.json";

function Main() {

const cardProdutos = produtos.map(item => {
  console.log(item.imageURL)
    return (
      <Cards
      key={item.id}
      nome={item.nome}
      valor={item.valor}
      imagem={item.imageURL}
      />
    )
  })

  return (
    <StyleMain>
      <StyleGaleria>
        {cardProdutos}
       
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
      <div>
        <p>TOTAL: R$ 150,00</p>
      </div>
      </div>
      
    </StyleMain>
  );
}

export default Main;
