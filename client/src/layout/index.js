/* eslint-disable no-unused-vars */
import { Layout } from "antd";
import LargeHeader from "../components/Header";
import CustomFooter from "../components/Footer";
const { Content } = Layout;

function AuthLayout(props) {
  const { children } = props;

  return (
    <Layout>
      <LargeHeader />
      <Content>{children}</Content>
      <CustomFooter />
    </Layout>
  );
}

export default AuthLayout;
