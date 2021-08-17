import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export function BasketItem(props) {
  const [basketItem, setBasketItem] = useState();
  const basketName = props.basketName;
 
  //retrieve basket contents
  useEffect(() => {
    if (basketName) {
      if (!basketItem) {
        fetch(`/api/basket/${basketName}`, {
          credentials: "same-origin",
        })
          .then((response) => response.text())
          .then((data) => {
            const retrievedItem = JSON.parse(data);
            setBasketItem(retrievedItem);
          });
      }
    }
  });

  if (!basketItem) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <div className="col-md-6 col-lg-4 my-3 mx-auto">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h4 className="card-title text-center"> {basketName} </h4>
              <ul className="list-group">
                <li className="list-group-item">Name: {basketItem.name} </li>
                <li className="list-group-item">Description: {basketItem.description} </li>
                <li className="list-group-item">Quantity: {basketItem.quantity} </li>
              </ul>
              <div className="p-2 text-center">
              <a href={ '/item/form?basketName=' + basketName } className="btn btn-secondary mx-1">
                Add/Edit
              </a>
              <a href={ '/item/delete?basketName=' + basketName } className="btn btn-danger mx-1">
                Delete
              </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
