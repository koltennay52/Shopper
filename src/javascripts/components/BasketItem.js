import React, { useEffect, useState } from "react";
import { BasketListItem } from "./BasketListItem";

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
            setBasketItem(retrievedItem.items);
          });
      }
    }
  });

  if (!basketItem) {
    return (
      <>
        <div className="col-md-6 col-lg-4 my-3 mx-auto">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h4 className="card-title text-center"> {basketName} </h4>
              <div className="p-2 text-center">
              <a href={ '/item/form?basketName=' + basketName } className="btn btn-secondary m-1">
                Add Item
              </a>
              <a href={ '/item/delete?basketName=' + basketName } className="btn btn-danger m-1">
                Delete Baskets
              </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="col-md-6 col-lg-4 my-3 mx-auto">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h4 className="card-title text-center"> {basketName} </h4>
              <ul className="list-group">
                {basketItem.map((itemName) => {
                return <BasketListItem key={itemName} itemName={itemName}/>;
                })}
              </ul>
              <div className="p-2 text-center">
              <a href={ '/item/form?basketName=' + basketName } className="btn btn-secondary m-1">
                Add Item
              </a>
              <a href={ '/item/delete?basketName=' + basketName } className="btn btn-danger m-1">
                Delete Basket
              </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
