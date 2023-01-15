import { IconCar, StyleHeader, StyleInputGrup, Inputs } from "./style";
import { BsHandbag } from "react-icons/bs";

function Header(props) {
  const onChangeOrdem = (event) => {
    props.setOrdem(event.target.value);
  };

  const handlePrecoMin = (event) => {
    props.setValorMin(event.target.value);
  };

  const handlePrecoMax = (event) => {
    props.setValorMax(event.target.value);
  };

  const handlePesquisa = (event) => {
    props.setPesquisa(event.target.value);
  };

  return (
    <StyleHeader>
     
      <div>
        <h2>Espaço Fantástico</h2>
        <h4>Explore o universo com nossos brinquedos!</h4>
      </div>

      <StyleInputGrup>
      <Inputs>
        <select value={props.ordem} onChange={onChangeOrdem}>
          <option value="none">Ordenar por:</option>
          <option value="crescente">Preço: maior para o menor</option>
          <option value="decrescente">Preço: menor para o maior</option>
        </select>

        <input
          placeholder="Pesquise aqui!"
          onChange={handlePesquisa}
          value={props.pesquisa}
        />

        <input
          onChange={handlePrecoMin}
          value={props.valorMin}
          placeholder="Preço mínimo"
        />

        <input
          onChange={handlePrecoMax}
          value={props.valorMax}
          placeholder="Preço máximo"
        />
        {/* <button ><img src="https://cdn-icons-png.flaticon.com/512/157/157410.png" alt="Imagem de botão" className="BotaoFoguete"/></button> */}
      </Inputs>
     
      <IconCar>
        <p>
          <BsHandbag size={30} />
          <span>{props.carrinho.length}</span>
        </p>
      </IconCar>
      </StyleInputGrup>
    </StyleHeader>
  );
}

export default Header;
