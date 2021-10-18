import * as H from "./styles";
import Capa from "../../assets/images/header/capa.png"
import { useAuth } from '../../context/auth';

const Header: React.FC = () => {

  const {user} = useAuth();

  return (

    <H.Header>
      <H.SVGImage src={Capa} alt="Capacete da Tribo"></H.SVGImage>
      <H.Button href="/">Inicio</H.Button>
      <H.Button href="/mensagem">Mensagem</H.Button>
      <H.Button href="/conteudo">Conteúdos das Mulas</H.Button>
      <H.Button href="/curral">Mulas sem Curral</H.Button>
      <H.Button href="/secuide">Se cuide Mula</H.Button>
      {!user && <H.Button href="/login">Login</H.Button>}
      {user && <H.Button href="/minhaconta">Minha Conta</H.Button>}
    </H.Header>

  );

}

export default Header;