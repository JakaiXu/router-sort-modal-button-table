import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";
const Accordion = ({ items }) => {
  const [expandedIndex, setExpendedIndex] = useState(null);
  const handleClick = (nextIndex) => {
    console.log('expended Click');
   setExpendedIndex(
    (currentExpendedIndex)=>{
      if(currentExpendedIndex === nextIndex){
        return null;
      }else {
       return nextIndex
      }
    }
   )
  }
  const renderedItems = items.map((item, index) => {
    const isExpended = index === expandedIndex;
    const icon = (
      <span className="text-xl">
        {isExpended ? <AiFillCaretDown /> : <AiFillCaretLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <label
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer "
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </label>
        {isExpended && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
