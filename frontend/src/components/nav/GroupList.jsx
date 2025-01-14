import { useQuery } from "@apollo/client";
import { READ_GROUPS } from "../../utils/queries";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

const GroupList = ({
  setActiveModal,
  setActiveGroupId,
  setActiveItemId,
  activeGroupId,
  activeItemId,
}) => {
  const { loading, data } = useQuery(READ_GROUPS);
  const groups = data?.readGroups || {};

  if (loading) {
    // return a spinner centered horizonally and vertically in the page;
    return (
      <div className="w3-display-middle">
        <div className="w3-center">
          <i className="fa fa-spinner w3-spin w3-jumbo" />
        </div>
      </div>
    );
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

  const showHideItemLists = (e, id, override) => {
    setActiveGroupId(id);
    const thisList = e.currentTarget.lastElementChild;
    const itemLists = document.querySelectorAll(".tm-item-list");
    itemLists.forEach((itemList) => {
      itemList !== thisList
        ? itemList.classList.add("w3-hide")
        : override
        ? itemList.classList.remove("w3-hide")
        : thisList.classList.toggle("w3-hide");
    });
  };

  return (
    <>
      {groups &&
        groups.map((group) => (
          <div
            id="group-list"
            key={group._id}
            onClick={(e) => showHideItemLists(e, group._id, false)}
          >
            <Link
              // link to groupid
              to={group._id}
              className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey w3-large w3-vcenter"
            >
              <i className="fa fa-inbox w3-margin-right" />
              {group.name}
              <i
                className="fa fa-caret-down w3-margin-left"
                style={
                  group.items.length === 0
                    ? { display: "none" }
                    : { display: "inline" }
                }
              />
              <div
                type="button"
                onClick={(e) => {
                  showHideItemLists(e, group._id, false);
                  setActiveModal("update-group");
                }}
                className="w3-button w3-transparent w3-hover-red w3-large w3-right"
              >
                <i className="fa fa-pencil w3-margin-center" />
              </div>
              <div
                type="button"
                onClick={(e) => {
                  showHideItemLists(e, group._id, false);
                  setActiveModal("create-item");
                }}
                className="w3-button w3-transparent w3-hover-red w3-large w3-right"
              >
                <i className="fa fa-plus w3-margin-center" />
              </div>
            </Link>
            <ItemList
              group={group}
              setActiveModal={setActiveModal}
              setActiveItemId={setActiveItemId}
            />
          </div>
        ))}
    </>
  );
};

export default GroupList;
