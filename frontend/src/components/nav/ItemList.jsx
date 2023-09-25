const ItemList = ({ group, setActiveModal, setActiveItemId }) => {
  return (
    <>
      <div id={`Demo${group._id}`} className="w3-hide w3-animate-left">
        {group.items.map((item) => (
          <div
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
            
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemList;
