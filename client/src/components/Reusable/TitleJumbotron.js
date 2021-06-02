import React from "react";
import styled from "styled-components";
import { ICOLOR } from "../../constants";
import { CustomH1 } from "./Typography";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 157px 0;
  background-color: ${ICOLOR.linenBackground};
`;

function TitleJumbotron({ title }) {
  return (
    <Root>
      <CustomH1 textTransform="uppercase">{title}</CustomH1>
    </Root>
  );
}

export default TitleJumbotron;
