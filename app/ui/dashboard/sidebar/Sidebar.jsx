import { menuItems } from "@/app/lib";
import MenuLink from "./menuLink/MenuLink";
import { MdLogout } from "react-icons/md";

const sidebar = () => {
  return (
    <div className="sticky w-full">
      {/* Sidebar avatar */}
      <div className="flex items-center gap-5 mb-8 ">
        {/* image avatar */}
        <img
          src="/noavatar.png"
          className="object-cover rounded-full w-14 h-14"
          alt="Avatar"
        />
        {/* Detail avatar */}
        <div className="flex flex-col">
          <span className="font-semibold">Andika Syamsaian</span>
          <span className="text-xs text-textSoft">Administrator</span>
        </div>
      </div>

      {/* SideBar List */}
      <ul className="list-none">
        {menuItems.map((menuItem) => (
          <li key={menuItem.title}>
            <span className="mb-3 text-sm font-bold text-textSoft">
              {menuItem.title}
            </span>
            {menuItem.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>

      {/* Button Logout */}
      <button className="flex items-center w-full gap-3 px-5 py-4 my-2 rounded-lg hover:bg-blue-400">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
export default sidebar;
