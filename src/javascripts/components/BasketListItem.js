import React from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export function BasketListItem(props) {
  const itemName = props.itemName;


  if (!itemName) {
    return <LoadingSpinner />;
  } else {
    return (
      <ul className="list-group-item"> { itemName }</ul>
    );
  }
}
