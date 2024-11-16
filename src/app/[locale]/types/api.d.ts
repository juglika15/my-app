export interface PostType {
  id: number;
  title: string;
  body: string;
  views: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  warrantyInformation: string;
  shippingInformation: string;
  minimumOrderQuantity: number;
  returnPolicy: string;
  dimensions: { width: number; height: number; depth: number };
  weight: number;
  sku: string;
  reviews: Review[];
}

interface Review {
  reviewerName: string;
  rating: number;
  date: string;
  comment: string;
}
