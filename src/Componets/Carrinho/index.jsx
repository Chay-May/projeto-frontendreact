import { StyleCarrinho } from "../Main/style";
import { StyleText, StyleDelet } from "./style";
import { TiDeleteOutline } from "react-icons/ti"

function Carrinho (){
    return(
<StyleCarrinho className="ms-4">
<StyleText>Borboleta espacial</StyleText>
<p className="me-5">2</p>
<p className="ms-4">74,89</p>
<StyleDelet><TiDeleteOutline size={25}/></StyleDelet>
</StyleCarrinho>
    )
}

export default Carrinho;