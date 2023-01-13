import { StyleButton, StyleCard, StyleImagem, StyleInfo } from "./style";

function Cards(propsc) {
  return (
  <StyleCard>
    <StyleInfo>
        <StyleImagem src="src/imagens/Imagem do WhatsApp de 2023-01-12 à(s) 20.39.39.jpg" alt="imagem" />
        <p>{props.nome}</p>
        <p>{props.valor}</p>
        <StyleButton>ADD CARRINHO</StyleButton>
    </StyleInfo>
  </StyleCard>
  )
}

export default Cards;
