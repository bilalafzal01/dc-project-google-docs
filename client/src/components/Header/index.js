/* eslint-disable no-unused-vars */
import { Button, Col, Drawer, Image, Menu } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid";
import FeatherIcon from "feather-icons-react";
import styled from "styled-components";

import { ICOLOR, NAVS, SIZE } from "../../constants";
import { CustomButton } from "../Reusable/Buttons";
import NavItem from "./NavItem";
import useViewPort from "../../hooks/useViewport";
import { CustomRow } from "../Reusable/Utilities";

const Root = styled.div`
  background-color: ${ICOLOR.white};
  box-shadow: 0px 2px 5px #99999929;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 47px;
  height: 90px;
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

  @media screen and (max-width: ${SIZE.XL}px) {
    margin-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
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

const Sider = styled.div``;

function LargeHeader() {
  const history = useHistory();
  const handleLeftClick = () => {
    history.push(`/`);
  };
  return (
    <Root>
      <Container>
        <Left onClick={handleLeftClick}>
          <Image src="/docs_icon.svg" width={50} preview={false} />
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
            onClick={() => {
              window.open(`http://localhost:3006/documents/${uuidv4()}`);
            }}
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

function SmallHeader() {
  const history = useHistory();
  const handleLeftClick = () => {
    history.push(`/`);
  };
  const [siderShow, setSiderShow] = useState(false);

  return (
    <Root>
      <Container>
        <Left onClick={handleLeftClick}>
          <Image src="/docs_icon.svg" width={50} preview={false} />
          <h1>Docs</h1>
        </Left>
        <Right>
          <CustomButton onClick={() => setSiderShow(!siderShow)}>
            <FeatherIcon icon="menu" fill="black" />
          </CustomButton>
        </Right>
        <Drawer
          title={null}
          placement="right"
          closable={true}
          onClose={() => setSiderShow(false)}
          visible={siderShow}
        >
          <CustomRow marginbottom="1rem">
            <Col span={24}>
              <CustomButton
                borderRadius
                marginLeft="36px"
                background={ICOLOR.orange}
                textColor={ICOLOR.white}
                onClick={() => {
                  window.open(`http://localhost:3006/documents/${uuidv4()}`);
                }}
              >
                <span>New Document</span>
              </CustomButton>
            </Col>
          </CustomRow>
          <CustomRow marginbottom="1rem">
            <Col span={24}>
              <CustomButton
                borderRadius
                marginLeft="5px"
                background={ICOLOR.white}
                textColor={ICOLOR.dark}
              >
                <span>Code</span>
              </CustomButton>
            </Col>
          </CustomRow>
        </Drawer>
      </Container>
    </Root>
  );
}

const CustomHeader = () => {
  const windowSize = useViewPort();
  return windowSize.width >= SIZE.XL ? <LargeHeader /> : <SmallHeader />;
};

export default CustomHeader;
