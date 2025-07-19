import { BookReviewItemWrite } from "@/models/book.model";
import { httpClient} from "./http"
import { BookReviewItem } from "@/models/book.model";

interface AddBookReviewResponse {
  message: string;
}

export const fetchBookReivew = async (bookId: string) => {
  const response = await httpClient.get(`/reviews/${bookId}`);
  return response.data;
}

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
  console.log("[MSW] /reviews mock called");
  const response = await httpClient.post<AddBookReviewResponse>(`/reviews/${bookId}`, data);
  return response.data
};

export const fetchReviewAll = async () => {
  console.log("[MSW] /reviews mock called");
  const response = await httpClient.get<BookReviewItem[]>('/reviews');
  return response.data;
}