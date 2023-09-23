import { useState } from "react";
import { useMutation } from "@apollo/client";

import { READ_GROUPS } from "../utils/queries";
import { CREATE_GROUP } from "../utils/mutations";

const addGroupForm = ({ groups }) => {
  const [name, setName] = useState("");

  const [createGroup, { loading, error }] = useMutation(CREATE_GROUP, {
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
    } catch (err) {
      console.error("Group error:", err);
    }
  };
  return (
    <div>
      <h1>Add Group</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addGroupForm;
