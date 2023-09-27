import { READ_GROUPS, READ_GROUP } from "../../utils/queries";
import { UPDATE_GROUP, DELETE_GROUP } from "../../utils/mutations";
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from "react";

const UpdateGroupForm = ({ activeGroupId, setActiveModal }) => {
  const { data } = useQuery(READ_GROUP, {
    variables: { _id: activeGroupId },
  });
  const group = data?.readGroup || null;
  const [newGroupName, setNewGroupName] = useState(group?.name || "");
  useEffect(() => {
    setNewGroupName(group?.name || "");
  }, [group]);

  const [updateGroup] = useMutation(UPDATE_GROUP, {
    refetchQueries: [{ query: READ_GROUPS }],
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateGroup({
        variables: {
          _id: activeGroupId,
          name: newGroupName,
        },
      });
      console.log("Group updated successfully:", data);
      setActiveModal(null);
    } catch (err) {
      console.error("Group error:", err);
    }
  };

  const [deleteGroup] = useMutation(DELETE_GROUP, {
    refetchQueries: [{ query: READ_GROUPS }],
  });
  const handleGroupDelete = async (e, _id) => {
    e.preventDefault();
    try {
      await deleteGroup({
        variables: { _id },
      });
      setActiveModal(null);
      console.log("Group deleted successfully:", data);
    } catch (err) {
      console.error("Group error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Group Name</label>
      <input
        className="w3-input w3-border w3-margin-bottom"
        type="text"
        id="name"
        name="name"
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        autoFocus
      />
      <div className="w3-section">
        <a
          className="w3-button w3-red"
          onClick={(e) => handleGroupDelete(e, activeGroupId)}
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

export default UpdateGroupForm;
