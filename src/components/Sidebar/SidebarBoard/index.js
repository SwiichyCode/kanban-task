import React from "react";

import { TbLayoutBoardSplit } from "react-icons/tb";

import { useFetch } from "../../../hooks/useFetch";
import { SidebarBoardWrapper } from "./style";

export default function SidebarBoard() {
  const url = "http://localhost:3000/boards";
  const { data: boards } = useFetch(url);

  return (
    <SidebarBoardWrapper>
      <h2>all boards ({boards && boards.length})</h2>
      <ul>
        {boards &&
          boards.map(({ name }, index) => (
            <li key={index}>
              <TbLayoutBoardSplit size={"1.2em"} />
              <span>{name}</span>
            </li>
          ))}
        <li className="btnBoard">
          <TbLayoutBoardSplit size={"1.2em"} />
          <span>+ Create New Board</span>
        </li>
      </ul>
    </SidebarBoardWrapper>
  );
}
