"use client";
import { IReview } from "@/app/types";
import Slider from "@ant-design/react-slick";
import { Settings } from "@ant-design/react-slick";
import { ReviewItem } from "./ReviewItem";

interface IReviewProps {
  reviews: IReview[];
}

export const Review = ({ reviews }: IReviewProps) => {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="review">
      <div className="container">
        <div className="review__title title">
          <div className="title__main">Client Testimonial</div>
          <p className="title__text">
            Condimentum rutrum placerat egestas condimentum mi eros. Eleifend
            cras quirntum Feugiat elit placerat. Diam tempor malesuada.
          </p>
        </div>
        <div className="review__inner">
          <Slider {...settings}>
            {reviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
