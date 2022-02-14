import { useNavigate } from "react-router-dom";

import { firebase, auth, database } from "../../services/firebase";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import logoGoogle from "../../assets/images/google-icon.svg";

import { Container, Division, MainContent } from "./styles";
import { Button } from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  function handleCreateRoom() {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then((result) => {
      console.log(result);

      navigate("/nova-sala");
    });
  }

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
          <button onClick={handleCreateRoom}>
            <img src={logoGoogle} alt="logo google" />
            Crie sua sala com o Google
          </button>
          <Division>ou entre em uma sala</Division>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
};

export default Home;
