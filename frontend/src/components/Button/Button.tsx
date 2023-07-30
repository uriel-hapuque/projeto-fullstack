import { StyledButton } from "./style"

interface ButtonProps {
  type: "button" | "submit" | "reset";
  buttonText: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type, buttonText, onClick }) => {
  return (

    <StyledButton onClick={onClick} type={type}>
      {buttonText}
    </StyledButton>


  )
}