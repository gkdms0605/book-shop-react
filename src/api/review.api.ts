import { httpClient} from "./http"

export const fetchBookReivew = async (bookId: string) => {
  const response = await httpClient.get(`/reviews/${bookId}`);
  return response.data;
}