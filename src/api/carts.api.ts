import { httpClient } from "./http";

interface addCartParams {
  book_id: number;
  quantity: number;
}

export const addCart = async (params: addCartParams) => {
  const response = await httpClient.post('/carts', params);
  return response.data;
}