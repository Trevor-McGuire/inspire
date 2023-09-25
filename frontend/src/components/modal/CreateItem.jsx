import { READ_GROUPS } from "../../utils/queries";
import { CREATE_ITEM } from "../../utils/mutations";
import { useState } from "react";
import { useMutation } from "@apollo/client";

const CreateItem = ({ activeGroupId, setActiveModal }) => {
  const [newItemName, setNewItemName] = useState("");

  const [addItem] = useMutation(CREATE_ITEM, {
    refetchQueries: [{ query: READ_GROUPS }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addItem({
        variables: {
          name: newItemName,
          groupId: activeGroupId,
        },
      });
      console.log("Item added successfully:", data);
      setNewItemName("");
      setActiveModal(null);
    } catch (err) {
      console.error("Item error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Item Name</label>
      <input
        className="w3-input w3-border w3-margin-bottom"
        type="text"
        id="name"
        name="name"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <div className="w3-section">
        <button className="w3-button w3-light-grey w3-right" type="submit">
          Submit <i className="fa fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};

export default CreateItem;
