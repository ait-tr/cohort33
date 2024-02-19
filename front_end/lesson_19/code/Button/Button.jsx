import './styles.css'

function Button({ name, type = "button", onClick = () => {} }) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;
