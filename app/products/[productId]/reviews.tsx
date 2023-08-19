import { Review } from "@/mocks/reviews";

type ReviewsProps = {
  productId: string;
};

export default async function Reviews({ productId }: ReviewsProps) {
  const resp = await fetch(`http://localhost:3000/api/reviews/${productId}`);
  const reviews = (await resp.json()) as Review[];

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>{r.content}</li>
        ))}
      </ul>
    </>
  );
}
