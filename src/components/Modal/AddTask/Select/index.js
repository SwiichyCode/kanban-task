import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { SelectWrapper } from "./style";

export default function CustomSelect() {
  const options = [
    { id: 0, label: "Todo" },
    { id: 1, label: "Doing" },
    { id: 2, label: "Done" },
  ];
  const [items, setItems] = useState(options);
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    toggleDropdown();
  };

  return (
    <SelectWrapper>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? items.find((item) => item.id == selectedItem).label
            : "Todo"}
          {/* <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i> */}
          <IoIosArrowDown size={"1.2em"} color={"#635FC7"} />
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id === selectedItem && "selected"
                }`}
              ></span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </SelectWrapper>
  );
}
