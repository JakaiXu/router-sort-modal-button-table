import React from "react";
import Accordion from "../components/Accordion";
const AccordionPage = () => {
  const items = [
    {
      id: "1",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project can use React on any project can use React on any project can use React on any project can use React on any project can use React on any project",
    },
    {
      id: "2",
      label: "How can I use Javascript on a project?",
      content:
        "You can use Javascript on any project can use Javascript on any project can use Javascript on any project can use Javascript on any project can use Javascript on any project",
    },
    {
      id: "3",
      label: "What can I use CSS on a project?",
      content:
        "You can use CSS on any project can use CSS on any project can use CSS on any project can use CSS on any project can use CSS on any project",
    },
    {
      id: "4",
      label: "Do you use HTML on a project?",
      content:
        "You can use HTML on any project can use HTML on any project can use HTML on any project can use HTML on any project can use HTML on any project",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
