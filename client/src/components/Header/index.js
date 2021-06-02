/* eslint-disable no-unused-vars */
import { Button, Image } from "antd";
import React from "react";
import styled from "styled-components";
import { ICOLOR, NAVS, SIZE } from "../../constants";
import { CustomButton } from "../Reusable/Buttons";
import NavItem from "./NavItem";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  box-shadow: 0px 2px 5px #99999929;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47px;
  height: 110px;

  @media screen and (max-width: ${SIZE.MD}px) {
    padding: 0 24px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-family: "Poppins-SemiBold";
    margin-left: 1rem;
    margin-bottom: 0;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const Right = styled.div`
  display: flex;
`;

const NavBar = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
`;

const SignInButton = styled(Button)`
  margin-left: 5px;
  outline: none;
  border-radius: 10px;
  background-color: white;
  border: none;
  height: 48px;
  width: 110px;
  span {
    font-family: "Inter-Medium";
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    text-transform: uppercase;
  }
`;

function LargeHeader() {
  return (
    <Root>
      <Container>
        <Left>
          <Image src="/docs_icon.svg" width={50} />
          <h1>Docs</h1>
        </Left>
        <Right>
          <NavBar>
            {NAVS?.map((item) => {
              const { id, label, link } = item;
              return <NavItem {...{ id, label, link }} key={id} />;
            })}
          </NavBar>
        </Right>
        <Buttons>
          <CustomButton
            borderRadius
            marginLeft="36px"
            background={ICOLOR.orange}
            textColor={ICOLOR.white}
          >
            <span>New Document</span>
          </CustomButton>
          <CustomButton
            borderRadius
            marginLeft="5px"
            background={ICOLOR.white}
            textColor={ICOLOR.dark}
          >
            <span>Code</span>
          </CustomButton>
        </Buttons>
      </Container>
    </Root>
  );
}

export default LargeHeader;
