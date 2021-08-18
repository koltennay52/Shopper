import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

toast.configure();

const validationSchema = yup.object({
  itemname: yup.string().required()
});

export function BasketItemFormik(props) {
    const basketName = props.basketName;
    const submitArray = [];

  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: 
         {
            itemname: ""
          },
      
      validationSchema,
      onSubmit(values) {
        submitArray.push(values.itemname);
        fetch(`/api/basket/${basketName}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify({
            items: submitArray
          }),
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
      },
    });

  return (
    <form className="text-center p-5" action="#!">
      <h2 className="mb-4 font-weight-bold text-secondary">
        Enter Item
      </h2>

      <input
        type="text"
        className="form-control mb-4  input-shadow"
        placeholder="Name"
        value={values.itemname}
        onChange={handleChange}
        name="itemname"
      />
      <p className="form-errors">{errors.itemname}</p>

    

      <button
        className="btn btn-primary m-3"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <a href="/" className="btn btn-info mx-1">
                Cancel
              </a>
    </form>
  );
}
