import Routes from "./Routes";
import GlobalStyle from "./styles/global";

import { AuthContextProvider } from "./context/AuthContext";

function App() {

  return (
    <>
      <GlobalStyle />
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
    </>
  );
}

export default App;
