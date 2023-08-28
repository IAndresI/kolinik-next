import { IReview } from "../types";

export const getReviews = async (): Promise<IReview[] | Error> => {
  const reviews = await fetch(`${process.env.API_ROUTE}/reviews`);

  if (reviews.ok) {
    const reviewsData = await reviews.json();
    return reviewsData.data;
  } else {
    return new Error("Error");
  }
};
