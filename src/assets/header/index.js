import * as H from "./styles";
import Capa from "../images/capa.png"

export default function Header() {

  return (

    <H.Header>
      <img src={Capa} alt="Capacete da Tribo" width="5%"></img>
      <H.Button href="/">Inicio</H.Button>
      <H.Button href="/Mensagem">Mensagem</H.Button>
      <H.Button href="/Canal">Canal das Mulas</H.Button>
      <H.Button href="/Curral">Mulas sem Curral</H.Button>
      <H.Button href="/Cuidados">Se cuide Mula</H.Button>
    </H.Header>

  );

}