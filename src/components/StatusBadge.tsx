import Green from "../assets/GreenDot.svg";
import Red from "../assets/RedDot.svg";

type Status = "Warning" | "Normal";

interface IStatusBadge {
  status?: Status;
}

export const StatusBadge = ({ status }: IStatusBadge) => {
  const validatedStatus: Status =
    status && ["Warning", "Normal"].includes(status) ? status : "Normal";

  const isNormal = validatedStatus === "Normal";

  return (
    <div className="flex justify-between w-full mt-4">
      <p className="text-base text-gray-500 mt-1">Status</p>
      <div className="border border-gray-300 rounded-xl px-4 py-1 flex items-center mr-16">
        <img
          src={isNormal ? Green : Red}
          alt="Red Dot"
          className={isNormal ? "mr-4" : "mr-2"}
        />
        <p className="text-base text-gray-500">{validatedStatus}</p>
      </div>
    </div>
  );
};
