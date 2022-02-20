import React, { useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import axios from "axios";
import Rows from "../components/Rows";
import Alert from "../components/Alert";

function Users() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([])
  const [show, setShow] = useState({status: false, message: ""})


  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  /* add user */
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/users", form)
      .then((res) => {
        setErrors({})
        setShow({status: true, message: res.data.success ? "USER ADDED WITH SUCCESS": ""})
      })
      .catch((err) => setErrors(err.response.data));
      setTimeout(() => {
        setShow({status: false, message: ""})
      }, 4000);
  };
/* get users */

useEffect(async ()=>{
  await axios.get('/api/users')
  .then(res=>{
    setUsers(res.data)
  })
  
}, [users])

/* delete users */
const onDelete  = (id)=>{
 if(window.confirm('are you sure to delete this user?')){
  axios.delete(`/api/users/${id}`)
  .then(res=>  setShow({status: true, message: res.data.message ? "DELETED WITH SUCCESS": ""}))
  .catch(err=>alert(err.response.data))
  setTimeout(() => {
    setShow({status: false, message: ""})
  }, 4000);
 }
}
  return (
    <div className="row p-4">
      {/* alert */}
      <Alert type={"success"} SHOW={show.status} message={show.message}/>
      {/* title */}
      <div className="p-4 mt-4">
        <h2>Crud tutorial</h2>
      </div>
      {/* form */}
      <div className="p-4 col-12 col-lg-4">
      
        <form onSubmit={onSubmitHandler}>
          <div>
            <InputGroup
              name="Email"
              label="Email"
              type="text"
              onChangeHandler={onChange}
              errors={errors.Email}
            />
            <InputGroup
              name="Lastname"
              label="Lastname"
              type="text"
              onChangeHandler={onChange}
              errors={errors.Lastname}
            />
            <InputGroup
              name="Firstname"
              label="Firstname"
              type="text"
              onChangeHandler={onChange}
              errors={errors.Firstname}
            />
            <InputGroup
              name="Age"
              label="Age"
              type="text"
              onChangeHandler={onChange}
              errors={errors.Age}
            />
          </div>
          <div className="btn__ mt-5">
            <button type="submit" className="btn btn-primary block">
              Add user
            </button>
          </div>
        </form>
       
      </div>
      {/* table */}

      <div className="table__ col-12 col-lg-7 mx-4">
      <table class="table">
      <thead>
        <tr>
          <th scope='col'>Email</th>
          <th scope='col'>Lastname</th>
          <th scope='col'>Firstname</th>
          <th scope='col'>Age</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
       {
         users.map(({_id, Email, Lastname, Firstname, Age})=>(
           <Rows Email={Email} Lastname={Lastname} Firstname={Firstname} Age={Age} Id={_id} onDelete={onDelete}/>
         ))
       }
      </tbody>
    </table>
      </div>
    </div>
  );
}

export default Users;
