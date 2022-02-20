import React from "react";
import classnames from "classnames";
function InputGroup({ name, label, type, onChangeHandler, errors , value}) {
  return (
    <div class="mb-3">
      <label for={name} class="form-label">
        {label}
      </label>
      <input
        type={type}
        class={classnames("form-control", {'is-invalid': errors})}
        name={name}
        id={name}
        onChange={onChangeHandler}
        value={value}
      />
      {errors && <div class="invalid-feedback">{errors}</div>}
    </div>
  );
}

export default InputGroup;
