export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
}

export interface FetchParams {
  page?: number;
  perPage?: number;
  sort?: string; // e.g. 'price:asc' or 'title:desc'
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface FetchResult<T> {
  items: T[];
  total: number;
}
