import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { READ_ITEM, READ_GROUPS } from "../../utils/queries";
import { UPDATE_ITEM, DELETE_ITEM } from "../../utils/mutations";

const UpdateItem = ({ activeItemId, setActiveModal }) => {
  const { data } = useQuery(READ_ITEM, {
    variables: { _id: activeItemId },
  });
  const item = data?.readItem || null;
  const [newItemName, setNewItemName] = useState(item?.name || "");
  useEffect(() => {
    setNewItemName(item?.name || "");
  }, [item]);

  const [updateItem] = useMutation(UPDATE_ITEM, {
    refetchQueries: [{ query: READ_GROUPS }],
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateItem({
        variables: {
          _id: activeItemId,
          name: newItemName,
        },
      });
      console.log("Item updated successfully:", data);
      setActiveModal(null);
    } catch (err) {
      console.error("Item error:", err);
    }
  };

  const [deleteItem] = useMutation(DELETE_ITEM, {
    refetchQueries: [{ query: READ_GROUPS }],
  });
  const handleItemDelete = async (e, _id) => {
    e.preventDefault();
    try {
      await deleteItem({
        variables: { _id },
      });
      setActiveModal(null);
      console.log("Item deleted successfully:", data);
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
        autoFocus
      />
      <div className="w3-section">
        <a
          className="w3-button w3-red"
          onClick={(e) => handleItemDelete(e, activeItemId)}
        >
          Delete <i className="fa fa-remove" />
        </a>
        <button className="w3-button w3-light-grey w3-right" type="submit">
          Submit <i className="fa fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};

export default UpdateItem;
