import { Button } from "antd";
import styled from "styled-components";
import { ICOLOR, SIZE } from "../../constants";

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

  &:focus {
    background-color: ${({ background }) => `${background}95`};
  }

  @media screen and (max-width: ${SIZE.LG}px) {
    font-size: 14px;
    margin-left: 0;
  }
`;

export { CustomButton };
