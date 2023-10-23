import { Wrap } from "@chakra-ui/react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "../routes.tsx";
import { UserProvider } from "../ApiContext";

function App() {
  return (
    <Wrap width="100vw" height="100vh" backgroundColor="gray.700">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <MainRoutes />
        </UserProvider>
      </BrowserRouter>
    </Wrap>
  );
}

export default App;
