import { useQuery } from "@apollo/client";
import { READ_GROUPS } from "../utils/queries";
import { CREATE_ITEM } from "../utils/mutations";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";

const AddItemForm = () => {


  const { loading, error, data } = useQuery(READ_GROUPS);
  const groups = data?.readGroups || null;

  const [name, setName] = useState("");
  const [groupId, setGroupId] = useState("");

  useEffect(() => {
    if (groups?.length > 0) {
      setGroupId(groups[0]._id);
    }
    console.log("groups", groups)
  }
  , [groups]);

  const [addItem] = useMutation(CREATE_ITEM, {
    refetchQueries: [{ query: READ_GROUPS }],
  });

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addItem({ 
        variables: {
          name,
          groupId
        }
      });
      console.log("Item added successfully:", data);
      setName("");
    } catch (err) {
      console.error("Item error:", err);
    }
  };

  if (groups?.length == 0 || loading ) {
    return (
      <></>
    );
  }

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleAddItem}>
        <label htmlFor="group">Group:</label>
        <select 
          id="group"
          name="group"
          onChange={(e) => setGroupId(e.target.value)}
          value={groupId}
        >
          {groups &&
            groups.map((group) => (
              <option key={group._id} value={group._id}>
                {group.name}
              </option>
            ))}
        </select>
        <br />
        <br />
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

export default AddItemForm;
