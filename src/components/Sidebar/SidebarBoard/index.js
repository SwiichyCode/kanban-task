import React, { useState } from "react";
import { SidebarBoardWrapper } from "./style";
import { TbLayoutBoardSplit } from "react-icons/tb";

export default function SidebarBoard() {
  const itemsBoard = [
    { text: "Platform Launch", className: "itemsBoard" },
    { text: "Marketing Plan", className: "itemsBoard" },
    { text: "Roadmap", className: "itemsBoard" },
    { text: "+ Create New Board", className: "btnBoard" },
  ];

  const [items, setItems] = useState(itemsBoard);

  const filteredItems = itemsBoard.filter(
    (item) => item.className === "itemsBoard"
  );

  return (
    <SidebarBoardWrapper>
      <h2>all boards ({filteredItems.length})</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.className}>
            <TbLayoutBoardSplit size={"1.2em"} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </SidebarBoardWrapper>
  );
}
