import React, { useContext, useState, Fragment } from "react";
import styled from "styled-components";

import { ThemeContext } from "./styles/Theme";
import { useFetch } from "./hooks/useFetch";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import Task from "./components/Task";

export default function App() {
  const url = "http://localhost:3000/boards";
  const { data: boards } = useFetch(url);

  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <Fragment>
      <Container className={`${theme}`}>
        <Sidebar handleToggle={handleToggle} visible={visible} />
        <div className="main">
          <Header visible={visible} boards={boards} />
          <Task boards={boards} />
        </div>
      </Container>
    </Fragment>
  );
}

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
