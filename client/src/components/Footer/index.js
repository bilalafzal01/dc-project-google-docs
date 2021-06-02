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
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  h6 {
    font-size: 1rem;
    margin-bottom: 0;
    text-align: center;
    color: ${ICOLOR.white};
    text-transform: uppercase;

    span.first {
      color: ${ICOLOR.textLight};
      text-transform: none;
    }
    .hearts {
      margin: 0 0.5rem;
      color: ${ICOLOR.orange};
    }
  }
`;

function CustomFooter() {
  return (
    <Root>
      <h6>
        <span className="first">
          Made with
          <span className="hearts">&hearts;</span>
          by
        </span>
        <br />
        <span>Bilal Afzal & Alam Khalid</span>
      </h6>
    </Root>
  );
}

export default CustomFooter;
