type ButtonTypes = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  name: string;
  isRed?: boolean;
  type?: ButtonTypes;
  onClick?: () => void;
}