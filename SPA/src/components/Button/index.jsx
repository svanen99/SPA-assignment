import React from 'react';

const Button = ({ name, updateFunction }) => {
  return (
    <button  className="ogButton" onClick={() => updateFunction(name)}>
      {name}
    </button>
  );
};

export default Button;
