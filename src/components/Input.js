import React from "react";


function Input({value, onChange, name}) {
    return (
      <div>
          <label htmlFor={name}>{name}</label>
          <input value={value} onChange={onChange} id={name}/>
      </div>
    );
}

export default Input;