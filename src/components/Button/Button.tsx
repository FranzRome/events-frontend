import React from 'react';
import './Button.css'

interface ButtonProps {
   text: string;
   backgroundColor: string;
   onClick: () => void;
}

const Button = ({ text, backgroundColor="rgb(0, 123, 255)", onClick }: ButtonProps) => {
   return (
      <button
         style={{ backgroundColor }}
         onClick={onClick}
         className="button"
      >
         {text}
      </button>
   );
};

export default Button;
