import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try{
    const response = await httpClient.get<FetchBooksResponse>('/books', {
    params: params,
  })

  return response.data;
} catch (err) {
  return {
    books: [],
    pagination: {
      totalCount: 0,
      currentPage: 1,
    }
  }
}
};

export const fetchBook = async (bookId: string) => {
  try {
    const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error("fetchBook error:", error);  // 에러 원인 추적용
    throw error; // 에러 다시 던져서 useEffect에서 처리 가능
  }
}

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`/likes/${bookId}`);
  return response.data;
}

export const unlikeBook = async (bookId: number) => {
  const response = await httpClient.delete(`/likes/${bookId}`);
  return response.data;
}

export const fetchBestBooks = async () => {
  const response = await httpClient.get<Book[]>('/books/best');
  return response.data;
}