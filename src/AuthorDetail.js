import React, { Component } from "react";
import { observer } from "mobx-react";
// Components
import BookTable from "./BookTable";

// Stores
import authorStore from "./stores/AuthorStore";
import bookStore from "./stores/BookStore";
import AddBookModal from "./AddBookModal";

class AuthorDetail extends Component {
  render() {
    const authorID = this.props.match.params.authorID;
    const author = authorStore.getAuthorById(authorID);
    const books = author.books.map(bookID => bookStore.getBookById(bookID));

    return (
      <div>
        <div>
          <h3>{author.first_name + " " + author.last_name}</h3>
          <AddBookModal authorID={authorID} />

          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={author.first_name + " " + author.last_name}
          />
        </div>
        <BookTable books={books} />
      </div>
    );
  }
}

export default observer(AuthorDetail);
