/* eslint-disable react-hooks/exhaustive-deps */
import { Col } from "antd";
import styled from "styled-components";
import queryString from "query-string";
import { io } from "socket.io-client";

import { CustomRow } from "../../components/Reusable/Utilities";
import { SIZE } from "../../constants";
import Editor from "./components/Editor";
import { useEffect, useState } from "react";

const Root = styled.div`
  padding: 2.5rem 7.5rem;
  @media screen and (max-width: ${SIZE.XL}px) {
    padding: 2rem 2.5rem;
  }
  @media screen and (max-width: ${SIZE.LG}px) {
    padding: 2rem 2.5rem;
  }
`;

const ENDPOINT = "http://localhost:4000/";
let socket;

export default function EditorPage({ location }) {
  const [username, setUsername] = useState("");
  const [document, setDocument] = useState("");

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    console.log(name);
    socket = io(ENDPOINT);
    const documentID = location.pathname.split("/")[2];
    if (document) {
      setDocument(documentID);
      setUsername(name);
      document.title = `DocsClone - User: ${username}`;
      socket.emit("join", { name, document: documentID }, (err) => {
        if (err) {
          alert(err);
        }
      });
    }
  }, [location.search]);

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
