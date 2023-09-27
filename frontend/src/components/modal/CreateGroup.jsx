import { useState } from "react";
import { useMutation } from "@apollo/client";

import { READ_GROUPS } from "../../utils/queries";
import { CREATE_GROUP } from "../../utils/mutations";

const CreateGroup = ({ setActiveModal }) => {
  const [name, setName] = useState("");

  const [createGroup] = useMutation(CREATE_GROUP, {
    refetchQueries: [{ query: READ_GROUPS }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createGroup({
        variables: { name },
      });
      console.log("Group added successfully:", data);
      setName("");
      setActiveModal(null);
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <div className="w3-section">
        <button className="w3-button w3-light-grey w3-right" type="submit">
          Submit <i className="fa fa-paper-plane" />
        </button>
      </div>
    </form>
  );
};

export default CreateGroup;
