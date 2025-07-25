import { Book } from "@/models/book.model";
import styled from "styled-components";
import BookItem, { BookItemStyle } from "./BookItem";

interface Props {
  book: Book;
  itemIndex: number;
}

function BookBestItem({book, itemIndex}: Props) {
  return (
    <BookBestItemStyle>
      <BookItem book={book} view="grid" />
      <div className="rank">{itemIndex + 1}</div>
    </BookBestItemStyle>
  );
}

const BookBestItemStyle = styled.div`
  ${BookItemStyle} {
    .summary,
    .price,
    .likes {
      display: none;
    }

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  position: relative;

  .rank {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    background: ${(props) => props.theme.color.primary};
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: #fff;
    font-weight: 700;
    font-style: italic;
  }
`;

export default BookBestItem;