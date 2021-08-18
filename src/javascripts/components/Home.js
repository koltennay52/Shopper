import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { BasketItem } from "./BasketItem";
import { About } from "./About";

export function Home(props) {
  const [pantry, setPantry] = useState();

  //retrieve pantry list name
  useEffect(() => {
    if (!pantry) {
      fetch("/api/pantry", {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_baskets = JSON.parse(data);
          setPantry(retrieved_baskets.baskets);
        });
    }
  });

  if (!pantry) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <h1 className="m-1 text-center">
          My Baskets
        </h1>
        <div className="container">
          <div className="row">
            {pantry.map((b) => {
              return <BasketItem key={b} basketName={b} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
