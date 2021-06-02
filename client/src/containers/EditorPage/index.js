import { Col } from "antd";
import styled from "styled-components";
import { CustomRow } from "../../components/Reusable/Utilities";
import { SIZE } from "../../constants";
import Editor from "./components/Editor";

const Root = styled.div`
  padding: 2.5rem 7.5rem;
  @media screen and (max-width: ${SIZE.XL}px) {
    padding: 2rem 2.5rem;
  }
  @media screen and (max-width: ${SIZE.LG}px) {
    padding: 2rem 2.5rem;
  }
`;

export default function EditorPage() {
  return (
    <Root>
      <CustomRow>
        <Col span={24}>
          <Editor />
        </Col>
      </CustomRow>
    </Root>
  );
}
