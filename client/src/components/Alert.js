import React from "react";

function Alert({type, SHOW, message}) {
  return (
    <div class={`alert alert-${type} alert-dismissible fade ${SHOW ? "show" : ""}`} role="alert">
      {message}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
