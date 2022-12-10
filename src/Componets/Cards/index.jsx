import { StyleButton, StyleCard, StyleImagem, StyleInfo } from "./style";

function Cards() {
  return (
  <StyleCard>
    <StyleInfo>
        <StyleImagem src="https://brandili.vteximg.com.br/arquivos/ids/273753-484-670/image-f92a45331d4a480785007422b03bdca8.jpg?v=637783053894130000" alt="Brinquedo galinha" />
        <p>Chocalho girassol</p>
        <p>R$ 10,50</p>
        <StyleButton>ADD CARRINHO</StyleButton>
    </StyleInfo>
  </StyleCard>
  )
}

export default Cards;
