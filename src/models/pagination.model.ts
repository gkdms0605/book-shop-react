export interface Pagination {
  currentPage: number;
  totalCount: number;
}

export interface OrderSheet {
  items: number[];
  totlaQuantity: number;
  totalPrice: number;
  firstBookTitle: string;
  delivery: {
    address: string;
    receiver: string;
    contact: string;
  }
}