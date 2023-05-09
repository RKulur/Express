import React, { useContext } from "react";
import Form from "./Form";
import axios from "axios";
import { StudentContext } from "../context/StudentContext";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useContext(StudentContext);

  function handleEdit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;

    axios
      .put(`http://localhost:5000/api/student/update/${id}`, {
        name,
        phone,
        email,
        address,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    navigate("/");
  }

  return (
    <Form
      title="Edit"
      handleSubmit={handleEdit}
    />
  );
}
