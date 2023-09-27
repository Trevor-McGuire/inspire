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

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  return (
    <ApolloProvider client={client}>
      <StrictMode>
        <Nav
          setActiveModal={setActiveModal}
          setActiveGroupId={setActiveGroupId}
          activeGroupId={activeGroupId}
          setActiveItemId={setActiveItemId}
          activeItemId={activeItemId}
        />
        <div className="w3-main w3-container" style={{ marginLeft: 320 }}>
          <i
            className="fa fa-bars w3-button w3-white w3-hide-large w3-xlarge w3-margin-left w3-margin-top"
            onClick={w3_open}
          />
          <Outlet />
        </div>

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
