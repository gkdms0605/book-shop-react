import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

const dummyBook: Book = {
  id: 1,
  title: "test book",
  img: 1,
  category_id: 1,
  summary: "summary",
  author: "author",
  price: 10000,
  likes: 1,
  form: "paperback",
  isbn: "Dummy ISBN",
  pages: 100,
  detail: "detail",
  contents: "contents",
  pubDate: "2021-01-01"
}

function BooksList() {
  return (
    <BooksListStyle>
      <BookItem book={
        dummyBook
      }/>
    </ BooksListStyle>
  )
}

const BooksListStyle = styled.div``;

export default BooksList;