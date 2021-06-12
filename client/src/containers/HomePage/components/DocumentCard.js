import styled from "styled-components";
import { CustomButton } from "../../../components/Reusable/Buttons";
import { ICOLOR, SIZE } from "../../../constants";

const Root = styled.div`
  background: ${ICOLOR.white};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  span.top {
    flex: 4;
    border-top: 1px solid ${ICOLOR.borderColor};
    border-left: 1px solid ${ICOLOR.borderColor};
    border-right: 1px solid ${ICOLOR.borderColor};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 2rem 2rem;
  }
  @media screen and (max-width: ${SIZE.XL}px) {
  }
  @media screen and (max-width: ${SIZE.LG}px) {
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  button {
    width: 100%;
  }
`;

function DocumentCard({ onClickHandler, cardData }) {
  return (
    <Root>
      <span className="top">
        {cardData.data
          ? cardData.data.ops[0].insert.substring(0, 50)
          : "Empty Document"}
      </span>
      <CardFooter>
        <CustomButton
          background={ICOLOR.orange}
          textColor={ICOLOR.white}
          onClick={onClickHandler}
        >
          <span>Edit</span>
        </CustomButton>
      </CardFooter>
    </Root>
  );
}

export default DocumentCard;
