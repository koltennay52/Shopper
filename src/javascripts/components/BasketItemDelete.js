import React from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { toast } from "react-toastify";

toast.configure();

function deleteCall(basketName) {
  fetch(`/api/basket/${basketName}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(() => {
      toast.success("Success!", {
        onClose: () => {
          document.location = "/";
        },
        autoClose: 1000,
      });
    })
    .catch((error) => {
      toast.error("Failed!", {
        onClose: () => {
          document.location = "/";
        },
        autoClose: 1000,
      });
    });
}

export function BasketItemDelete(props) {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let basketName = params.get("basketName");

  if (!basketName) {
    return <LoadingSpinner />;
  } else {
    return (
      <div className="container text-center py-5">
        <h4 className="text-center">
          Are you sure you want to delete item { basketName }?
        </h4>
            <button
            className="btn btn-primary m-3"
            type="submit"
            onClick={ () => deleteCall(basketName) }
        >
            Yes
        </button>
        <a href="/" className="btn btn-info mx-1">
                No
              </a>

      </div>
    );
  }
}
