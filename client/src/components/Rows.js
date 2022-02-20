import React from "react";
import { Link } from "react-router-dom";

function Rows({ Email, Lastname, Firstname, Age, Id, onDelete }) {
  return (
    <tr>
      <th>{Email}</th>
      <td>{Lastname}</td>
      <td>{Firstname}</td>
      <td>{Age}</td>
      <td className="gap__actions">
       
       <span className="badge bg-info"><Link to={`/${Id}`} className="text-white"><i className="fas fa-edit"></i></Link></span>
       
        <span className="badge bg-danger" onClick={() => onDelete(Id)}><i
          className="fas fa-trash-alt"
        ></i></span>
      </td>
    </tr>
  );
}

export default Rows;
