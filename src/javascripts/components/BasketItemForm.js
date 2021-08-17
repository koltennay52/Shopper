import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { BasketItemFormik } from "./BasketItemFormik"

export function BasketItemForm(props) {
  const [basketItem, setBasketItem] = useState();

  let search = window.location.search;
  let params = new URLSearchParams(search);
  let basketName = params.get("basketName");

  //retrieving item data if it exists
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

  if (!basketName) {
    return <LoadingSpinner />;
  } else {
    if (basketItem) {
      return (
        <BasketItemFormik
          basketItem={basketItem}
          basketName={basketName}
        />
      );
    }
    else {
        return <LoadingSpinner />;
    }
  }
}
