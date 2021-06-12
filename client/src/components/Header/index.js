/* eslint-disable no-unused-vars */
import { Button, Col, Drawer, Image, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid";
import queryString from "query-string";
import FeatherIcon from "feather-icons-react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ICOLOR, NAVS, SIZE } from "../../constants";
import { CustomButton } from "../Reusable/Buttons";
import NavItem from "./NavItem";
import useViewPort from "../../hooks/useViewport";
import { CustomRow } from "../Reusable/Utilities";
import actions from "../../redux/actions";

const { triggerNameModal } = actions;

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

function LargeHeader({ name }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLeftClick = () => {
    history.push(name ? `/?name=${name}` : `/`);
  };
  const nameModal = useSelector((state) => state.modals.nameModal);
  const handleNewClick = () => {
    dispatch(triggerNameModal());
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
            {name ? (
              <NavItem id={name} label={`User: ${name}`} link="" />
            ) : null}
          </NavBar>
        </Right>
        <Buttons>
          <CustomButton
            borderRadius
            marginLeft="36px"
            background={ICOLOR.orange}
            textColor={ICOLOR.white}
            onClick={handleNewClick}
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

function SmallHeader({ name }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLeftClick = () => {
    history.push(name ? `/?name=${name}` : `/`);
  };
  const handleNewClick = () => {
    dispatch(triggerNameModal());
  };
  const [siderShow, setSiderShow] = useState(false);

  return (
    <Root>
      <Container>
        <Left onClick={handleLeftClick}>
          <Image src="/docs_icon.svg" width={50} preview={false} />
          <h1>Docs</h1>
        </Left>
        {name ? <NavItem id={name} label={name} link="" /> : null}
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
                onClick={handleNewClick}
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
  const { name } = queryString.parse(window.location.search);

  return windowSize.width >= SIZE.XL ? (
    <LargeHeader name={name} />
  ) : (
    <SmallHeader name={name} />
  );
};

export default CustomHeader;
