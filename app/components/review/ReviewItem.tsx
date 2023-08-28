import { IReview } from "@/app/types";
import Image from "next/image";

interface IReviewItemProps {
  review: IReview;
}

export const ReviewItem = ({ review }: IReviewItemProps) => {
  return (
    <div className="review__item">
      <div className="review__text-container">
        <p className="review__text">{review.text}</p>
      </div>
      <div className="review__author">
        <div className="review__image-container">
          <Image
            src={review.authorImage}
            width={100}
            height={85}
            alt="author image"
            className="review__image"
          />
        </div>
        <div className="review__author-decription">
          <div className="review__name">{review.author}</div>
          <div className="review__post">{review.authorPosition}</div>
        </div>
      </div>
    </div>
  );
};
