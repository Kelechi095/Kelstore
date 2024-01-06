"use client";

import { Rating } from "@mui/material";

interface RatingComponentProps {
  rating: number;
}

const RatingComponent = ({ rating }: RatingComponentProps) => {
  return (
    <div className="mt-2">
      <Rating value={rating} readOnly />
    </div>
  );
};

export default RatingComponent;
