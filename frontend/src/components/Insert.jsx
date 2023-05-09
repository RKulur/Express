import axios from "axios";
import Form from "./Form";
import { useNavigate } from "react-router-dom";


export default function Insert() {
  
  const navigate = useNavigate();

  function handleInsert(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const address = e.target.address.value;

    axios
      .post(`http://localhost:5000/api/student/insert`, {
        name,
        phone,
        email,
        address,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
  }
  return (
    <>
      <Form title="Insert" handleSubmit={handleInsert} />
    </>
  );
}
