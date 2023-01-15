import Cards from "../Cards";
import Carrinho from "../Carrinho";
import { StyleCarrinho, StyleGaleria, StyleMain } from "./style";
import produtos from "../../produtos.json";

function Main({ ordem, pesquisa, valorMax, valorMin, setPage, sacolaProduto }) {
  
  const { carrinho, handleRemoverProd, somaCarrinho, editQuantCarrinho, criarCarrinho } = sacolaProduto

  const cardProdutos = produtos

    .filter((produto) => {
      return produto.nome.toLowerCase().includes(pesquisa.toLowerCase());
    })
    .filter((produto) => produto.valor >= valorMin)
    .filter((produto) => {
      return valorMax ? produto.valor <= valorMax : produto;
    })

    .sort((a, b) => {
      if (ordem === "crescente") {
        if (a.valor >= b.valor) {
          return -1;
        } else {
          return true;
        }
      }

      if (ordem === "decrescente") {
        if (a.valor <= b.valor) {
          return -1;
        } else {
          return true;
        }
      }
      return null;
    })
    .map((item) => {
      return <Cards key={item.id} item={item} criarCarrinho={criarCarrinho} />;
    });

  return (
    <StyleMain>
      <StyleGaleria>{cardProdutos}</StyleGaleria>
      <div>
        <div>
          <StyleCarrinho>
          <div className="tagP">
          <h3 className="text-center">CARRINHO</h3>
            <p>Produto</p>
            <p>Qtd.</p>
            <p>Valor</p>
            </div>
          </StyleCarrinho>
          {carrinho.map((item) => {
            return (
              <Carrinho
                key={item.idProduto}
                item={item}
                removerProd={handleRemoverProd}
                editQuantCarrinho={editQuantCarrinho}
              />
            );
          })}
        </div>
        <div>
          <p>Total: {somaCarrinho().toFixed(2)}</p>
        </div>
        <button className="button"
          onClick={() => {
            setPage(2);
          }}
        >
          Finalizar compra
        </button>
      </div>
    </StyleMain>
  );
}

export default Main;
