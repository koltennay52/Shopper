import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export function Home(props) {
  const [pantry, setPantry] = useState();

  //retrieve summoner name
  useEffect(() => {
    if (!pantry) {
      fetch("/api/pantry", {
        credentials: "same-origin",
      })
        .then((response) => response.text())
        .then((data) => {
          const retrieved_baskets = JSON.parse(data);
          setPantry(retrieved_baskets);
          console.log(retrieved_baskets)
        });
    }
  });

    return (
      <>
        <div><h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1></div>
      </>
    );
  }

