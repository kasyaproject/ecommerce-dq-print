import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  const percentage = 12;

  return (
    <div className="flex bg-bgSoft p-5 gap-5 w-full rounded-md cursor-pointer hover:bg-blue-400">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="text-2xl font-semibold">10.397</span>
        <span className="text-sm">
          <span
            className={`${
              percentage > 0 ? "text-green-400" : "text-red-400"
            } m-1`}
          >
            {percentage}%
          </span>
          more than previous week
        </span>
      </div>
    </div>
  );
};
export default Card;
