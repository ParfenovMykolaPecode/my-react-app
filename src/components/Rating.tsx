import star from "../assets/star.svg";
import emptyStar from "../assets/emptyStar.svg";

interface IRating {
  rating: number;
}

export const Rating = ({ rating = 5 }: IRating) => {
  const normalizedRating = Math.min(5, rating);
  const fullStars = Math.floor(normalizedRating);
  const remainder = normalizedRating - fullStars;
  const hasHalfStar = remainder >= 0.25 && remainder <= 0.75;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img key={i} src={star} alt="Star" className="w-6 h-6 mr-1" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="w-6 h-6 relative mr-1">
          <img
            src={star}
            alt="Half Star"
            className="w-full h-full absolute top-0 left-0"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
          <img
            src={emptyStar}
            alt="Empty Star"
            className="w-full h-full absolute top-0 left-0 "
            style={{ clipPath: "inset(0 0 0 50%)" }}
          />
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <img
          key={i + fullStars + (hasHalfStar ? 1 : 0)}
          src={emptyStar}
          alt="Empty Star"
          className="w-6 h-6 mr-1"
        />
      );
    }

    return stars;
  };

  return (
    <div className="flex justify-between w-full mt-4">
      <p className="text-base text-gray-500">Reviews</p>
      <p className="text-base text-gray-500 ml-4">{normalizedRating}</p>
      <div className="flex items-center">{renderStars()}</div>
    </div>
  );
};
