import { useState } from "react";

import { FaStar } from "react-icons/fa";
import "./StarRating.css";

export default function StarRating({ stars }) {
  const [noOfStars] = useState(5);

  return (
    <>
      <div className={"padrestar-rating"}>
        <div className="star-rating">
          {[...Array(noOfStars)].map((_, index) => {
            return (
              <FaStar
                key={index}
                color={
                  (stars === 4 && index > 0) || stars === 5
                    ? "#fff700"
                    : "#e4e5e9"
                }
                size={40}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
//lo q lo diferencia con el testimonial slider es q el array con 3 objetos q tiene|
