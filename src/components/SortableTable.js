import React from "react";
import Table from "./Table";
import useSort from "../hooks/use-sort";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(
    data,
    config
  );
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <AiFillCaretUp />
        <AiFillCaretDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <AiFillCaretUp />
        <AiFillCaretDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <AiFillCaretUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <AiFillCaretDown />
      </div>
    );
  }
}
export default SortableTable;
