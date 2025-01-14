import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { READ_GROUP } from "../utils/queries";

export default function Group() {
  // get url parameter
  const { groupId } = useParams();

  const { data, loading } = useQuery(READ_GROUP, {
    variables: { _id: groupId },
  });
  const group = data?.readGroup || null;

  console.log(group);

  if (loading) {
    // return a spinner centered horizonally and vertically in the page;
    return (
      <div className="w3-display-middle">
        <div className="w3-center">
          <i className="fa fa-spinner w3-spin w3-jumbo" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Group Name: {group.name}</h1>
      <h4>Group Id: {group._id}</h4>
      <h4>Group Items:</h4>
      { group.items.length === 0 
        ? <p>No items in this group</p> 
        : (      <ul>
          {group.items.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>)
      }
    </div>
  );
}
