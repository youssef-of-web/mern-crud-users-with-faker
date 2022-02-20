import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputGroup from "../components/InputGroup";

function Details() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  var { id } = useParams();
  const navigate = useNavigate()
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`/api/users/${id}`, form)
      .then((res) => {
        navigate('/')
      })
      .catch((err) => setErrors(err.response.data));
  };
  useEffect(async ()=>{
    await axios.get(`/api/users/${id}`)
    .then(res=>{
      setForm(res.data)
    })
    console.log(form)
  },[])
  return (
   <div className="container p-4">
     <h2>Update {`${form.Firstname}  ${form.Lastname}`}</h2>
      <form onSubmit={onSubmitHandler}>
      <div>
        <InputGroup
          name="Email"
          label="Email"
          type="text"
          onChangeHandler={onChange}
          errors={errors.Email}
          value={form.Email}
        />
        <InputGroup
          name="Lastname"
          label="Lastname"
          type="text"
          onChangeHandler={onChange}
          errors={errors.Lastname}
          value={form.Lastname}
        />
        <InputGroup
          name="Firstname"
          label="Firstname"
          type="text"
          onChangeHandler={onChange}
          errors={errors.Firstname}
          value={form.Firstname}
        />
        <InputGroup
          name="Age"
          label="Age"
          type="text"
          onChangeHandler={onChange}
          errors={errors.Age}
          value={form.Age}
        />
      </div>
      <div className="btn__ mt-5">
        <button type="submit" className="btn btn-primary block">
          Update user
        </button>
      </div>
    </form>
   </div>
  );
}

export default Details;
