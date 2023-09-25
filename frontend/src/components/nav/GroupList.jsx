import { useMutation, useQuery } from "@apollo/client";

import { READ_GROUPS } from "../../utils/queries";
import { DELETE_GROUP, DELETE_ITEM } from "../../utils/mutations";
import ItemList from "./ItemList";

const GroupList = ({ setActiveModal, setActiveGroupId, setActiveItemId }) => {
  const { loading, error, data } = useQuery(READ_GROUPS);
  const groups = data?.readGroups || {};

  function myFunc(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-red";
    } else {
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-red", "");
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (groups.length === 0) {
    return (
      <h4>
        Try adding some groups{" "}
        <span role="img" aria-label="point-down">
          👆
        </span>
      </h4>
    );
  }

  return (
    <div>
      {groups &&
        groups.map((group) => (
          <div key={group._id}>
            <div
              id="myBtn"
              onClick={() => {
                myFunc(`Demo${group._id}`);
              }}
              className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey w3-large w3-vcenter"
            >
              <i className="fa fa-inbox w3-margin-right" />
              {group.name}
              <i className="fa fa-caret-down w3-margin-left" style={group.items.length === 0 ? {display: "none"} : {display: "inline"}}/>
              <div
                type="button"
                onClick={() => {
                  setActiveModal("update-group");
                  setActiveGroupId(group._id);
                }}
                className="w3-button w3-transparent w3-hover-red w3-large w3-right"
              >
                <i className="fa fa-pencil w3-margin-center" />
              </div>
              <div
                type="button"
                onClick={() => {
                  setActiveModal("create-item");
                  setActiveGroupId(group._id);
                }}
                className="w3-button w3-transparent w3-hover-red w3-large w3-right"
              >
                <i className="fa fa-plus w3-margin-center" />
              </div>
            </div>
            <ItemList
              group={group}
              setActiveModal={setActiveModal}
              setActiveItemId={setActiveItemId}
            />
          </div>
        ))}
    </div>
  );
};

export default GroupList;
