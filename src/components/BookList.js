import React from "react";
import BookDetails from "./BookDetails";
import { CardGroup, Card } from "react-bootstrap";

const BookList = ({ booklist, statusCodes, heading, handleChange }) => {
  return (
    <div>
      <div className="b-font">{capitalize(heading)}</div>
      <hr />
      {booklist.map((book, i) => (
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={book.image} />
            <Card.Body>
              <Card.Footer>
                <small className="text-muted">{book.title}</small>
                <BookDetails
                  key={"heading" + i}
                  book={book}
                  statusCodes={statusCodes}
                  handleChange={handleChange}
                />
              </Card.Footer>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </div>
  );
};
const capitalize = s => {
  if (typeof s !== "string") return "";
  let str = s.charAt(0).toUpperCase() + s.slice(1);
  return str.replace(/([a-z])([A-Z])/g, "$1 $2");
};

export default BookList;
