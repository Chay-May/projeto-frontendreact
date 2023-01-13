import { StyleHeader } from "./style";
import {BsHandbag} from "react-icons/bs"

function Header() {
  return (
      <StyleHeader>
        <div className="ms-4 mb-3 mt-3">
          <h2>
            Espaço Fantástico
          </h2>
          <h4>Explore o universo com nossos brinquedos!</h4>
        </div>
        <div>
          <input placeholder="Pesquise aqui!"/>
          <button>LUPA</button>
        </div>
        <div className="me-4">
        {/* me-4 = margem right */}
          <p><BsHandbag size={30} /></p>
        </div>
        
      </StyleHeader>
  );
}

export default Header;
