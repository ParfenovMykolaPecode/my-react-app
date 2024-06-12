import { Rating } from "./Rating";
import { StatusBadge } from "./StatusBadge";

interface IPopup {
  status: string;
  rating: number;
}

export const Popup = ({ status, rating }: IPopup) => {
  return (
    <div className="absolute bottom-4 right-4 z-20">
      <div className="w-72 h-36 bg-white border border-gray p-4 shadow-md items-start rounded-md">
        <p className="text-base font-medium text-black">
          A to Z Construction, LLC
        </p>
        <StatusBadge status={status} />
        <Rating rating={rating} />
      </div>
    </div>
  );
};
