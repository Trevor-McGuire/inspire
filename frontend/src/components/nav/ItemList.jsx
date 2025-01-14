import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ group, setActiveModal, setActiveItemId }) => {
  return (
    <>
      <div 
        className={"tm-item-list w3-animate-left w3-hide"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {group.items.map((item) => (
          <Link
            to={`/${group._id}/${item._id}`}
            key={item._id}
            className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
          >
            <div className="w3-container">
              <i className="fa fa-paper-plane" />
              <span className="w3-opacity w3-large">{item.name}</span>
              <div
                type="button"
                onClick={() => {
                  setActiveModal("update-item")
                  setActiveItemId(item._id)
                }}
                className="w3-button w3-transparent w3-hover-red w3-large w3-right"
              >
                <i className="fa fa-pencil w3-margin-center" />
              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </>
  );
};

export default ItemList;
