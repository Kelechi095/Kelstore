"use client";
import moment from "moment";
import Avatar from "./Avatar";

interface ReviewsProps {
  reviews: any;
}

const Reviews = ({ reviews }: ReviewsProps) => {
  console.log(reviews);

  return (
    <div className="mt-4">
      {reviews?.map((item: any) => (
        <div key={item.id} className="mb-3">
          <div className="flex items-center gap-3">
            <Avatar src={item.reviewerImage}/>
            <p className="font-semibold text-[15px]">{item.reviewerName}</p>
          </div>
          <p className="my-1 text-sm">{item.review}</p>
          <p className="text-xs">{moment(item.dateCreated).fromNow()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
