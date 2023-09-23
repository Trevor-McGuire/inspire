import { useMutation, useQuery } from "@apollo/client";

import { READ_GROUPS } from "../utils/queries";
import { DELETE_GROUP, DELETE_ITEM } from "../utils/mutations";


const GroupList = () => {
  const { loading, error, data } = useQuery(READ_GROUPS);
  const groups = data?.readGroups || {};


  const [deleteGroup] = useMutation(DELETE_GROUP, {
    refetchQueries: [{ query: READ_GROUPS }],
  });

  const [deleteItem] = useMutation(DELETE_ITEM, {
    refetchQueries: [{ query: READ_GROUPS }],
  });

  const handleGroupDelete = async (_id) => {
    try {
      await deleteGroup({
        variables: { _id },
      });
      console.log("Group deleted successfully:", data);
    } catch (err) {
      console.error("Group error:", err);
    }
  };

  const handleItemDelete = async (_id) => {
    try {
      await deleteItem({
        variables: { _id },
      });
      console.log("Item deleted successfully:", data);
    } catch (err) {
      console.error("Item error:", err);
    }
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  if (groups.length === 0) {
    return (
      <h4>
        Try adding some groups <span role="img" aria-label="point-down">👇</span>
      </h4>
    );
  }
  
  return (
    <div>
      <h1>Groups</h1>
      <div>
        {groups &&
          groups.map((group) => (
            <div key={group._id}>
              {" "}
              {/* Add key here */}
              <h3>
                {group.name}
                <button
                  type="button"
                  onClick={() => handleGroupDelete(group._id)} // Pass group._id directly
                >
                  <span>Delete</span>
                </button>
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item._id}>
                    <span>{item.name}</span>
                    <button
                  type="button"
                  onClick={() => handleItemDelete(item._id)} // Pass group._id directly
                >
                  <span>Delete</span>
                </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GroupList;
