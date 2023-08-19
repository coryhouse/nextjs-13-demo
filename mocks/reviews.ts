export type Review = {
  id: number;
  productId: number;
  content: string;
  author: string;
};

export const mockReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    content: "I love it!",
    author: "Pam Smith",
  },
  {
    id: 2,
    productId: 2,
    content: "It's great!",
    author: "Sam Lovey",
  },
];
