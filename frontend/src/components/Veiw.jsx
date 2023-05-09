import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import { ModalContext } from "../context/ModalContext";
import Modal from "./Modal";

export default function Veiw() {
  const { setName, setPhone, setEmail, setAddress, setId } =
    useContext(StudentContext);

  const { isConfirmed } = useContext(ModalContext);

  const [students, setStudents] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/student/get").then((res) => {
      setStudents(res.data.students);
    });
  }, [isDeleted]);

  function handleEditInput(e) {
    const targetIdx = e.target.getAttribute("name");
    setId(students[targetIdx]._id);
    setName(students[targetIdx].name);
    setPhone(students[targetIdx].phone);
    setEmail(students[targetIdx].email);
    setAddress(students[targetIdx].address);
  }

  function handleClearInput() {
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
  }

  function handleDelete(e) {
    setIsDeleteClicked((prev) => !prev);

    if (!isConfirmed) {
      return;
    }

    const targetIdx = e.target.getAttribute("name");

    const id = students[targetIdx]._id;
    axios
      .delete(`http://localhost:5000/api/student/delete/${id}`)
      .then((res) => {
        {
          setIsDeleted(true);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      {isDeleteClicked && <Modal />}
      <Link to={"/insert"} onClick={handleClearInput}>
        <div className="flex items-center p-2 justify-center mb-6 rounded-full active:scale-[.9] shadow-sm bg-green-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </Link>
      {students.length > 0 ? (
        <table className="veiw">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              return (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>{student.address}</td>
                  <td>
                    <Link to={"/edit"}>
                      <button
                        onClick={handleEditInput}
                        name={index}
                        className="px-4 py-2 bg-slate-200 rounded-lg active:scale-[.9]"
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to={"/"}>
                      <button
                        name={index}
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-400 rounded-lg active:scale-[.9]"
                      >
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1> No data, start the backend and database server... </h1>
      )}
    </>
  );
}
