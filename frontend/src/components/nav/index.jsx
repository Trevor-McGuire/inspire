import GroupList from "./GroupList";
import CreateGroup from "./CreateGroup";

const index = ({ setActiveModal, setActiveGroupId, setActiveItemId, activeGroupId, activeItemId }) => {
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-collapse w3-white w3-animate-left w3-card"
      style={{ zIndex: 3, width: 320 }}
      id="mySidebar"
    >
      <div
        className="w3-bar-item w3-button w3-border-bottom w3-xlarge w3-center"
        style={{
          background: "linear-gradient(to right, black, red)",
          color: "white",
          padding: "20px",
        }}
      >
        Inspire
      </div>
      <div
        onClick={w3_close}
        title="Close Sidemenu"
        className="w3-bar-item w3-button w3-hide-large w3-large"
      >
        Close <i className="fa fa-remove" />
      </div>
      <CreateGroup setActiveModal={setActiveModal} />
      <GroupList
        setActiveModal={setActiveModal}
        setActiveGroupId={setActiveGroupId}
        setActiveItemId={setActiveItemId}
        activeGroupId={activeGroupId}
        activeItemId={activeItemId}
      />
    </nav>
  );
};

export default index;
