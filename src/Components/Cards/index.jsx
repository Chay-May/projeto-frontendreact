import { StyleButton, StyleCard, StyleImagem, StyleInfo, StyleText } from "./style";

function Cards({item, criarCarrinho}) {

  return (
  <StyleCard>
    <StyleInfo>
        <StyleImagem src={item.imageURL}/>
        <StyleText>{item.nome}
        <br/>
        R$ {item.valor}
        </StyleText>
        <StyleButton onClick={()=>{criarCarrinho(item)}}>ADD PRODUTO</StyleButton>
    </StyleInfo>
  </StyleCard>
  )
}

export default Cards;
