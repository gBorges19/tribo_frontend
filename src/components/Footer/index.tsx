import * as F from "./styles";
//import Donkey from "../../assets/images/footer/donkey.png"

export default function Footer() {

  return (
    <F.Footer>
      <F.Button href="/sobre">Sobre Nós</F.Button>
      <F.Button href="/atribuicoes">Atribuições</F.Button>
      <F.Button href="/contato">Contato</F.Button>
    </F.Footer>
  );

}