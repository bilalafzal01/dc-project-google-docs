import styled from "styled-components";
import { ICOLOR } from "../../constants";

const CustomH1 = styled.h1`
  font-family: "Poppins-Bold";
  font-size: 60px;
  line-height: 72px;
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "inherit"};
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  color: ${({ color }) => color};
`;

const CustomH2 = styled.h2`
  font-family: "Poppins-Bold";
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  color: ${({ color }) => color};
`;

const CustomH3 = styled.h3`
  font-family: "Poppins-Bold";
  font-size: 26px;
  line-height: 39px;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  color: ${({ color }) => color};
`;

const CustomH4 = styled.h4`
  font-family: "Poppins-Bold";
  font-size: 18px;
  line-height: 27px;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  color: ${({ color }) => color};
`;

const CustomH5 = styled.h5`
  font-family: "Poppins-Bold";
  font-weight: 700;
  line-height: 30px;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "16px")};
  margin-top: ${({ margintop }) => (margintop ? margintop : 0)};
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
`;

const CustomH6 = styled.h6`
  font-family: "Poppins-Regular";
  font-weight: 400;
  line-height: 22px;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "16px")};
  margin-top: ${({ margintop }) => (margintop ? margintop : 0)};
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
`;

const CustomPara = styled.p`
  font-family: "Poppins-Regular";
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  line-height: 26px;
`;

const AboutPagePara = styled.p`
  font-family: "Poppins-Regular";
  font-size: ${({ fontsize }) => (fontsize ? fontsize : "14px")};
  line-height: 22px;
  margin-bottom: ${({ marginbottom }) => (marginbottom ? marginbottom : 0)};
  color: ${ICOLOR.textLightGray};
`;

export {
  CustomH1,
  CustomH2,
  CustomH3,
  CustomH4,
  CustomH5,
  CustomH6,
  CustomPara,
  AboutPagePara,
};
