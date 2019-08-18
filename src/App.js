import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import books from "./data.json";
import Search from "./components/Search";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    allBooks: books.all_books,
    bookStatus: ["wantToRead", "currentlyReading", "read"],
    wantToRead: [],
    currentlyReading: [],
    read: []
  };

  componentDidMount() {
    const { allBooks } = this.state;
    this.state.bookStatus.forEach(status => {
      this.setState({
        [status]: allBooks.filter(book => book.status === status)
      });
    });
  }

  handleChange = (nextStatus, prevStatus, id) => {
    let updateNewBookStatus = nextStatus.target.value;
    let updateBookStatus = {};
    let updatePrevBookStatus = [];
    let updateState = {};

    if (prevStatus) {
      updatePrevBookStatus = this.state[prevStatus].filter(book => {
        if (book.id === id) {
          updateBookStatus = book;
          updateBookStatus.status = updateNewBookStatus;
          return false;
        }
        return true;
      });
      updateState[prevStatus] = updatePrevBookStatus;
    }

    let allBooks = this.state.allBooks.map(book => {
      if (book.id === id) {
        book.status = updateNewBookStatus;
        updateBookStatus = book;
        updateBookStatus.status = updateNewBookStatus;
      }
      return true;
    });
    updateState[allBooks] = allBooks;
    updateState[updateNewBookStatus] = [
      ...this.state[updateNewBookStatus],
      updateBookStatus
    ];

    this.setState(updateState);
  };

  render() {
    const { bookStatus, allBooks } = this.state;
    return (
      <Router>
        <Container>
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>
                  <Link to="/">Home</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to="/search">Search</Link>
                </ListGroup.Item>
              </ListGroup>
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    bookStatus={bookStatus}
                    handleChange={this.handleChange}
                    booklist={this.state}
                  />
                )}
              />
              <Route
                path="/search"
                render={() => (
                  <Search
                    bookStatus={bookStatus}
                    handleChange={this.handleChange}
                    books={allBooks}
                  />
                )}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
export default App;
