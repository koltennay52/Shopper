import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function BasketForm(props) {
  const validationSchema = yup.object({
    basketName: yup.string().required(),
  });

  let { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      basketName: "",
    },
    validationSchema,
    onSubmit(values) {
      fetch(`/api/basket/${values.basketName}`, {
        method: "POST",
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
            autoClose: 2000,
          });
        })
        .catch((error) => {
          toast.error("Failed!", {
            onClose: () => {
              document.location = "/";
            },
            autoClose: 2000,
          });
        });
    },
  });

  return (
    <form className="text-center p-5" action="#!">
      <h4 className="mb-4">Create Basket</h4>

      <div className="control">
        <input
          type="text"
          className="form-control mb-4  input-shadow"
          placeholder="Basket Name"
          value={values.basketName}
          onChange={handleChange}
          name="basketName"
        />

      </div>

      <button
        className="btn btn-primary my-4 mx-1"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <a className="btn btn-info mx-1" href="/">
        Cancel
      </a>
    </form>
  );
}
