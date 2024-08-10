import React, { ChangeEvent } from "react";
import './TextField.css';

interface TextFieldProps {
  type: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ type, id, value, onChange }: TextFieldProps) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="text-field"
    />
  );
}

export default TextField;
