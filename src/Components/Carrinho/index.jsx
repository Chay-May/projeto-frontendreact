import { StyleCarrinho } from "../Main/style";
import { StyleText, StyleDelet } from "./style";
import { TiDeleteOutline } from "react-icons/ti";
import { useCounter } from "../../Hooks/useCounter";
import { useEffect } from "react";

function Carrinho({ removerProd, item, editQuantCarrinho }) {
  
const { quant, increment, decrement } = useCounter({min:0, max:5, initial:item.quantidade})

useEffect(()=>{
editQuantCarrinho(item.idProduto, quant)
},[quant])

  return (
    <StyleCarrinho className="ms-4">
      <StyleText>{item.nome}</StyleText>
      <p className="me-5">
        <button onClick={()=>{increment()}}>+</button>
        {quant}
        <button onClick={()=>{decrement()}}>-</button>
      </p>
      <p className="ms-4">R$ {item.valorTotal.toFixed(2)}</p>
      <StyleDelet>
        <button
          onClick={() => {
            removerProd(item.idProduto);
          }}
        >
          {" "}
          <TiDeleteOutline size={25} />{" "}
        </button>
      </StyleDelet>
    </StyleCarrinho>
  );
}

export default Carrinho;
