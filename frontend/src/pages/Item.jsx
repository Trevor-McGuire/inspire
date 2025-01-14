import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { READ_ITEM } from "../utils/queries";

export default function Item() {
  // get url parameter
  const { itemId } = useParams();

  const { data, loading } = useQuery(READ_ITEM, {
    variables: { _id: itemId },
  });
  const item = data?.readItem || null;

  console.log(item);

  if (loading) {item
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
      <h1>Item Name: {item.name}</h1>
      <h4>Item Id: {item._id}</h4>
      <h4>Item Parent: {item.group.name}</h4>

    </div>
  );
}
