import React from "react";
import { Fragment } from "react";
const Table = ({ data, config, keyFn }) => {
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="p-3">
        {column.render(rowData)}
      </td>
    ));
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    } else {
      return <th key={column.label}>{column.label}</th>;
    }
  });
  return (
    <table className="border-spacing-2 table-auto">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody className="text-center">{renderedRows}</tbody>
    </table>
  );
};

export default Table;
