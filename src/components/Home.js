import React from "react";
import BookList from "./BookList";

const Home = ({ bookStatus, booklist, handleChange }) => {
  return (
    <div>
      {bookStatus.map((status, i) => (
        <BookList
          key={i + "booklist"}
          booklist={booklist[status]}
          statusCodes={bookStatus}
          heading={status}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};
export default Home;
