import styled from "styled-components";
import { Pagination as IPagination } from "../../models/pagination.model";
import { LIMIT } from "../../constants/pagination";
import Button from "../common/button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/queryString";

interface Props {
  pagination: IPagination; 
}

function Pagination({ pagination }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const {totalCount, currentPage} = pagination;
  const pages = Math.ceil(totalCount / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.PAGE, page.toString());

    setSearchParams(newSearchParams);
  }

  return (
    <PaginationStyle>
      {
        pages > 0 && (
          <ol>
            {Array(pages).fill(0).map((_, index) => (
              <li>
                <Button key={index} size="small" scheme={index + 1 === currentPage ? "primary" : "normal"} onClick={() => handleClickPage(index + 1)}>
                  {index + 1}
                </Button>
              </li>
            ))}
          </ol>
        )
      }
    </PaginationStyle>
  )
}

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;

  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    padding: 0;
    margin: 0;
  }
`;
export default Pagination;
