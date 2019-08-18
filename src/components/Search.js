import React, { Component } from "react";
import BookDetails from "./BookDetails";
import { CardGroup, Card, Row } from "react-bootstrap";

export default class Search extends Component {
  state = {
    inputValue: ""
  };
  handleChange = e => {
    let inputValue = e.target.value;
    this.setState({ inputValue });
  };
  render() {
    const { bookStatus, handleChange, books } = this.props;
    return (
      <div>
        <Row className="mtop">
          <input onChange={this.handleChange} />
        </Row>
        <Row>
          {this.state.inputValue && (
            <div>
              {books
                .filter(obj =>
                  obj.title
                    .toLowerCase()
                    .includes(this.state.inputValue.toLowerCase())
                )
                .map((book, i) => {
                  return (
                    <CardGroup>
                      <Card>
                        <Card.Img variant="top" src={book.image} />
                        <Card.Body>
                          <Card.Footer>
                            <small className="text-muted">{book.title}</small>
                            <BookDetails
                              key={i + "sfasf"}
                              book={book}
                              statusCodes={bookStatus}
                              handleChange={handleChange}
                            />
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    </CardGroup>
                  );
                })}
            </div>
          )}
        </Row>
      </div>
    );
  }
}
