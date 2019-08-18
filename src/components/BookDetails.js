import React from "react";

const BookDetails = ({ book, statusCodes, handleChange }) => {
  return (
    <div className="selectWrapper">
      <select
        className="dropdown"
        value={book.status}
        onChange={e => handleChange(e, book.status, book.id)}
      >
        <option disabled>Move To...</option>
        {statusCodes.map((status, i) => (
          <option key={"book" + i} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};
export default BookDetails;
