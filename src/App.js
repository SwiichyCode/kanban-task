import React, { useContext, Fragment } from "react";
import styled from "styled-components";

import { ThemeContext } from "./styles/Theme";
import { useFetch } from "./hooks/useFetch";
import { useModal } from "./hooks/useModal";
import { useSidebar } from "./hooks/useSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import Task from "./components/Task";

export default function App() {
  const url = "http://localhost:3000/boards";
  const { data: boards } = useFetch(url);
  const { theme } = useContext(ThemeContext);
  const { isShowing, toggle } = useModal(false);
  const { isVisible, toggleBar } = useSidebar(true);

  return (
    <Fragment>
      <Container className={`${theme}`}>
        <Sidebar isVisible={isVisible} toggleBar={toggleBar} />
        <div className="main">
          <Header
            boards={boards}
            isVisible={isVisible}
            isShowing={isShowing}
            toggle={toggle}
          />
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
