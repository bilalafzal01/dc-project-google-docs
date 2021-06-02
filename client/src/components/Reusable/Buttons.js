import { Button } from "antd";
import styled from "styled-components";
import { ICOLOR } from "../../constants";

const CustomButton = styled(Button)`
  outline: none;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)};
  border-radius: ${({ borderRadius }) => (borderRadius ? "10px" : "0px")};
  background-color: ${({ background }) => background};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${ICOLOR.borderColor}` : "none"};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 48px;
  width: ${({ width }) => (width ? width : "110px")};
  span {
    font-family: "Inter-Medium";
    font-weight: 500;
    color: ${({ textColor }) => (textColor ? textColor : "inherit")};
    font-size: 16px;
    line-height: 19.36px;
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ background }) => `${background}90`};
  }
`;

export { CustomButton };
