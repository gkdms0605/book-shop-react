import { BookReviewItemWrite } from "@/models/book.model";
import { httpClient} from "./http"

export const fetchBookReivew = async (bookId: string) => {
  const response = await httpClient.get(`/reviews/${bookId}`);
  return response.data;
}

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
  const response = await httpClient.post<AddBookReviewResponse>(`/reviews/${bookId}`, data);
  return response.data
};