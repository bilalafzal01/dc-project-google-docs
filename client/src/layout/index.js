/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import LargeHeader from "../components/Header";
import CustomFooter from "../components/Footer";
import styled from "styled-components";
const { Content } = Layout;

const CustomContent = styled(Content)`
  min-height: 80vh;
`;

function AuthLayout(props) {
  const { children } = props;

  return (
    <Layout>
      <LargeHeader />
      <CustomContent>{children}</CustomContent>
      <CustomFooter />
    </Layout>
  );
}

export default AuthLayout;
