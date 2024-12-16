"use client";

import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-bgSoft p-5 rounded-lg flex items-center justify-between">
      {/* Tittle Page */}
      <div className="capitalize font-bold text-2xl text-textSoft">
        {pathname.split("/").pop()}
      </div>

      {/* Controller */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#2e374a] p-2 rounded-full px-4">
          <MdSearch size={20} />
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search. . . "
          />
        </div>

        {/* Icons */}
        <div className="flex space-x-2">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};
export default navbar;
