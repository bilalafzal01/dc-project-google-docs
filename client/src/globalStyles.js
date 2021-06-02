/* eslint-disable no-unused-vars */
import { SIZE } from "./constants";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::after,*::before{
        margin: 0;
        padding: 0;
    }
    div {
        box-sizing: border-box;
    }
    body{
        font-family: "Poppins-Regular";
        background-color: "#111";
    }
`;

export default GlobalStyle;
