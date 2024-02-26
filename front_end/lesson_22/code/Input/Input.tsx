import { InputProps } from "./types";
import "./styles.css";

function Input({ id, name, placeholder, label, type = "text" }: InputProps) {
  return (
    <div className="inputcomponent-container">
      <label htmlFor={id} className="inputcomponent-label">
        {label}
      </label>
      <input
        className="input-component"
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default Input;
