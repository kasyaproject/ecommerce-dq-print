import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="fixed">
      <div className="relative bg-gradient-to-t from-[#182237] to-[#253352] mb-5 rounded-md p-5">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-6 text-textSoft text-xs font-semibold">
          <span className="font-bold">🔥 Available Now</span>

          <h3 className="text-white text-base  font-semibold">
            How to use the new version of the admin dashboard?
          </h3>

          <span>Takes 4 minutes to learn</span>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>

          <button className="flex items-center text-white bg-blue-600 w-max rounded-md px-2 py-1 gap-1">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
