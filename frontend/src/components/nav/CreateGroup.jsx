const CreateGroup = ({ setActiveModal }) => {
  return (
    <div
      className="w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align"
      onClick={() => setActiveModal("create-group")}
    >
      Create New Group <i className="w3-padding fa fa-pencil" />
    </div>
  );
};

export default CreateGroup;
