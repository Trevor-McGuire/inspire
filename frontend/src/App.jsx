import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

import Nav from "./components/nav";
import Modal from "./components/modal";
import { StrictMode } from "react";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [activeItemId, setActiveItemId] = useState(null);


  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <Nav 
          setActiveModal={setActiveModal}  
          setActiveGroupId={setActiveGroupId}
          setActiveItemId={setActiveItemId}
        />
        <Outlet 

        />
        <Modal 
          activeModal={activeModal} 
          setActiveModal={setActiveModal}
          activeGroupId={activeGroupId}
          activeItemId={activeItemId}
        />
      </StrictMode>
    </ApolloProvider>
  );
}

export default App;
