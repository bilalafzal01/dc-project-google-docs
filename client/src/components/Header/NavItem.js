import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { ICOLOR } from "../../constants";
import styled from "styled-components";

const Root = styled.div`
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${ICOLOR.orange};

  span {
    cursor: pointer;
    text-decoration: none;
    color: ${ICOLOR.dark};
    font-size: 20px;
    text-transform: uppercase;
    font-family: "Inter-Bold";
    line-height: 19px;
  }

  &.active {
    border-bottom: 3px solid ${ICOLOR.orange};
  }
`;

const NavItem = (props) => {
  const { id, label, link } = props;
  const history = useHistory();

  return (
    <Root
      key={id}
      onClick={() => (link ? history.push(link) : null)}
      className={window.location.pathname === link ? "active" : ""}
    >
      <span>{label}</span>
    </Root>
  );
};

export default NavItem;
