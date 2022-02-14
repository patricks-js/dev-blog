import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

import { Container, Division, MainContent } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


const NewRoom = () => {
  return (
    <Container>
      <aside>
        <img src={illustrationImg} alt="ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="devBlog" />
            <h2>Criar uma nova sala</h2>
            <Division>ou entre em uma sala</Division>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">
                Criar sala
            </Button>
          </form>
          <p>Deseja entrar em uma sala existente? <Link to='/'>Clique aqui</Link></p>
        </MainContent>
      </main>
    </Container>
  );
};

export default NewRoom;
