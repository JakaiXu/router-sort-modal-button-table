import React, { useState, useEffect, useRef } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
import Panel from "./Panel";
const Dropdown = ({ options, value, onChange }) => {
  const [showItems, setShowItems] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setShowItems(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  const handleOptionClick = (option) => {
    setShowItems(false);
    onChange(option);
  };

  const renderedList = options.map((option) => {
    return (
      <div
        key={option.id}
        className=" hover:bg-sky-200 rounded cursor-pointer p-1 "
        onClick={() => handleOptionClick(option)}
      >
        <label>{option.label}</label>
      </div>
    );
  });

  return (
    <div className="w-64 relative" ref={divEl}>
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer  w-full"
      >
        {value?.label || "Select a Color:"}
        {showItems ? <AiFillCaretDown /> : <AiFillCaretLeft />}

        {showItems && (
          <Panel className="absolute top-full w-11/12">{renderedList}</Panel>
        )}
      </Panel>
    </div>
  );
};

export default Dropdown;
