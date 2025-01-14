import { useRef } from "react";

import CreateGroup from "./CreateGroup";
import CreateItem from "./CreateItem";
import UpdateGroup from "./UpdateGroup";
import UpdateItem from "./UpdateItem";
import Error from "./Error";

const index = ({
  activeModal,
  setActiveModal,
  activeGroupId,
  activeItemId,
}) => {
  const modalContentRef = useRef(null);
  function handleClickOutsideModal(e) {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target)
    ) {
      setActiveModal(null);
    }
  }
  return (
    <div
      id="modal"
      className="w3-modal"
      style={{
        zIndex: 4,
        display: activeModal ? "block" : "none",
      }}
      onClick={handleClickOutsideModal}
    >
      <div className="w3-modal-content w3-animate-zoom" ref={modalContentRef}>
        <div className="w3-container w3-padding w3-red">
          <span
            className="w3-button w3-red w3-right w3-xxlarge"
            onClick={() => {
              setActiveModal(null);
            }}
          >
            <i className="fa fa-remove" />
          </span>
          <h2>{activeModal}</h2>
        </div>
        <div className="w3-panel">
          {(() => {
            switch (activeModal) {
              case "create-group":
                return <CreateGroup setActiveModal={setActiveModal} />;
              case "create-item":
                return (
                  <CreateItem
                    setActiveModal={setActiveModal}
                    activeGroupId={activeGroupId}
                  />
                );
              case "update-group":
                return (
                  <UpdateGroup
                    setActiveModal={setActiveModal}
                    activeGroupId={activeGroupId}
                  />
                );
              case "update-item":
                return (
                  <UpdateItem
                    setActiveModal={setActiveModal}
                    activeItemId={activeItemId}
                  />
                );
              default:
                return <Error />;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default index;
