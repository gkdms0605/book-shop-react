import { render } from "@testing-library/react";
import { Book } from "../../models/book.model";
import { BookStoreThemeProiver } from "../context/ThemeContext";
import BookItem from "./BookItem";

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
  pubDate: "2021-01-01",
};

describe("BookItem", () => {
  it("랜더 여부", () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProiver>
        <BookItem book={dummyBook} />
      </BookStoreThemeProiver>
    );

    expect(getByText(dummyBook.title)).toBeInTheDocument();
    expect(getByText(dummyBook.summary)).toBeInTheDocument();
    expect(getByText(dummyBook.author)).toBeInTheDocument();
    expect(getByText("10,000원")).toBeInTheDocument();
    expect(getByText(dummyBook.likes)).toBeInTheDocument();
    expect(getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummyBook.img}/300/300`
    );
  });
});
