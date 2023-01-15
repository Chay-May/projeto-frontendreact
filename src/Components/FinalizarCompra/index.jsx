// import { Button } from "bootstrap";
import { Div, Titulo } from "./style";

export default function FinalizarCompra({ setPage }) {
  return (
    <Div>
      <Titulo>Obrigado(a) pela preferência!</Titulo>
      <button onClick={() => {setPage(1)}} className="Button">
        Continue comprando!
      </button>
    </Div>
  );
}
