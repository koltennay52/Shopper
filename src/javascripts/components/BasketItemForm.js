import React, { useState, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { BasketItemFormik } from "./BasketItemFormik";

export function BasketItemForm(props) {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let basketName = params.get("basketName");

  if (!basketName) {
    return <LoadingSpinner />;
  } else return <BasketItemFormik basketName={basketName} />;
}
