import styled from "styled-components";
import Theme from "./theme";

interface FaProps {
  size?: string;
  color?: string;
}

interface MarkerProps {
  color?: string;
  width?: string;
  height?: string;
}
export const Fa = styled.i<FaProps>`
  font-size: ${({ size }) => (size ? size : "2rem")};
  color: ${({ color }) => (color ? color : Theme.colors.white)};
`;

export const P = styled.p`
  font-size: 29px;
  padding: 0 15px;
  color: ${Theme.colors.gray};
`;
