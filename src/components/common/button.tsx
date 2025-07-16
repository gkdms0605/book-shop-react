import styled from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: ButtonSize;
  scheme: ButtonScheme;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

function Button({ children, size, scheme, onClick, disabled, isLoading: isloading, type }: ButtonProps) {
  return (
    <ButtonStyle
      size={size}
      scheme={scheme}
      onClick={onClick}
      disabled={disabled}
      isLoading={isloading}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<Omit<ButtonProps, "children">>`
  font-size: ${({ theme, size }) => theme.button[size].fontSize};
  padding: ${({ theme, size }) => theme.button[size].padding};
  color: ${({ theme, scheme }) => theme.buttonScheme[scheme].color};
  background-color: ${({ theme, scheme }) =>
    theme.buttonScheme[scheme].backgroundColor};
  border: 0;
  border-radius: ${({ theme, scheme }) => theme.borderRadius.default};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "none" : "pointer")};
`;

export default Button;
