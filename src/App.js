import React from "react";
import styled from "styled-components";

import Sidebar from "./Components/Desktop/Sidebar/Sidebar";
import "./styles/reset.css";

export default function App() {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
