import { Row } from "antd";
import styled from "styled-components";

const CustomRow = styled(Row)`
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
`;

export { CustomRow };
