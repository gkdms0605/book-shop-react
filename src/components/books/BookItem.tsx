import styled from "styled-components";
import { Book } from "@/models/book.model";
import { getImgSrc } from "@/utils/image";
import { formatNumbers } from "@/utils/format";
import { FaHeart } from "react-icons/fa";
import { ViewMode } from "@/components/books/BooksViewSwitcher";
import { Link } from "react-router-dom";

interface BookItemProps {
  book: Book;
  view?: ViewMode;
}

function BookItem({ book, view }: BookItemProps) {
  return (
    <BookItemStyle view={view}>
      <Link to={`/book/${book.id}`}>
        <div className="img">
          <img src={getImgSrc(book.img)} alt={book.title} />
        </div>
        <div className="content">
          <h2 className="title">{book.title}</h2>
          <p className="summary">{book.summary}</p>
          <p className="author">{book.author}</p>
          <p className="price">{formatNumbers(book.price)}원</p>
          <div className="likes">
            <FaHeart />
            <span>{book.likes}</span>
          </div>
        </div>
      </Link>
    </BookItemStyle>
  );
}

export const BookItemStyle = styled.div<Pick<BookItemProps, "view">>`
  a {
    display: flex;
    flex-direction: ${({view}) => (view === 'grid' ? 'column' : 'row')};
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }

  .img {
    border-radius: ${({ theme }) => theme.borderRadius.default};
    overflow: hidden;
    width: ${({view}) => view === 'grid' ? 'auto' : '160px'};
    img {
      max-width: 100%;
    }
  }

  .content {
    padding: 16px;
    position: relative;
    flex: ${({view}) => (view === 'grid' ? 0 : 1)};

    .title {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }

    .author {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
    }

    .price {
      font-size: 1rem;
      color: ${({ theme }) => theme.color.secondary};
      margin: 0 0 4px 0;
      font-weight: 700;
    }

    .likes {
      display: inline-flex; // 자식들의 넓이만큼 flex
      align-items: center;
      gap: 4px;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.color.primary};
      margin: 0 0 4px 0;
      font-weight: 700;
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.borderRadius.default};
      padding: 4px 12px;
      position: absolute;
      bottom: 16px;
      right: 16px;

      svg {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

export default BookItem;
