type ButtonTypes = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name: string;
  type?: ButtonTypes;
  onClick?: () => void;
}