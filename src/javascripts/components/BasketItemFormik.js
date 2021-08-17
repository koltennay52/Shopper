import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

toast.configure();

const validationSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  quantity: yup.number().required().min(1)
});

export function BasketItemFormik(props) {
    const basketName = props.basketName;
    let existingBasketItem;
  if (props.basketItem.name) {
        existingBasketItem = props.basketItem
  }

  const { handleSubmit, handleChange, values, errors, setFieldValue } =
    useFormik({
      initialValues: !existingBasketItem
        ? {
            name: "",
            description: "",
            quantity: 0
          }
        : {
            ...existingBasketItem,
          },
      validationSchema,
      onSubmit(values) {
        fetch(`/api/basket/${basketName}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
          body: JSON.stringify(values),
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
      <h2 className="mb-4 font-weight-bold text-secondary">
        Enter Item
      </h2>

      <input
        type="text"
        className="form-control mb-4  input-shadow"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        name="name"
      />
      <p className="form-errors">{errors.name}</p>

      <textarea
        className="form-control mb-4 input-shadow"
        placeholder="Description"
        value={values.description}
        onChange={handleChange}
        name="description"
      />
      <p className="form-errors">{errors.description}</p>


      <input
        type="number"
        className="form-control mb-4  input-shadow"
        placeholder="Quantity"
        value={values.quantity}
        onChange={handleChange}
        name="quantity"
      />
      <p className="form-errors">{errors.quantity}</p>

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
