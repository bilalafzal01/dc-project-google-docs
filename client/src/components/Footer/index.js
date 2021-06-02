import { Col, Image, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICOLOR } from "../../constants";
import { CustomButton } from "../Reusable/Buttons";
import { CustomH3, CustomH4, CustomPara } from "../Reusable/Typography";
import { CustomRow } from "../Reusable/Utilities";

const Root = styled.footer`
  background-color: ${ICOLOR.darkBackground};
  color: ${ICOLOR.textLight};
`;

function CustomFooter() {
  return <Root>footer</Root>;
}

export default CustomFooter;
