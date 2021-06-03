import { Col } from "antd";
import styled from "styled-components";
import { CustomRow } from "../../components/Reusable/Utilities";
import { SIZE } from "../../constants";
import DocumentCard from "./components/DocumentCard";

const Root = styled.div`
  padding: 2.5rem 7.5rem;
  @media screen and (max-width: ${SIZE.XL}px) {
    padding: 2rem 2.5rem;
  }
  @media screen and (max-width: ${SIZE.LG}px) {
    padding: 2rem 2.5rem;
  }
`;

const DocsCol = styled(Col)`
  h2 {
    font-family: "Poppins-SemiBold";
    margin-bottom: 1rem;
  }
`;

function Homepage() {
  return (
    <Root>
      {/* user docs */}
      <CustomRow marginbottom="1rem">
        <DocsCol span={24}>
          <h2>All Documents</h2>
          <CustomRow gutter={[16, 16]}>
            <Col xs={24} md={12} lg={8} xl={6} xxl={4}>
              <DocumentCard
                onClickHandler={() => {
                  window.open(`http://localhost:3006/documents/${123}`);
                }}
              />
            </Col>
            <Col xs={24} md={12} lg={8} xl={6} xxl={4}>
              <DocumentCard />
            </Col>
            <Col xs={24} md={12} lg={8} xl={6} xxl={4}>
              <DocumentCard />
            </Col>
            <Col xs={24} md={12} lg={8} xl={6} xxl={4}>
              <DocumentCard />
            </Col>
          </CustomRow>
        </DocsCol>
      </CustomRow>
      {/* all docs */}
      <CustomRow>
        <Col span={24}></Col>
      </CustomRow>
    </Root>
  );
}

export default Homepage;
