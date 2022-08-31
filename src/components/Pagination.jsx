import React from "react";

const Pagination = ({ postPerPage, totalPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li key={num}>
            <span onClick={() => paginate(num)}>{num}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
