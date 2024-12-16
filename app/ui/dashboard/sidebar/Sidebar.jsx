import { menuItems } from "@/app/lib";
import MenuLink from "./menuLink/MenuLink";
import { MdLogout } from "react-icons/md";

const sidebar = () => {
  return (
    <div className="sticky">
      {/* Sidebar avatar */}
      <div className="flex items-center gap-5 mb-8">
        {/* image avatar */}
        <img
          src="/noavatar.png"
          className="w-14 h-14 rounded-full object-cover"
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
            <span className="text-textSoft font-bold text-sm mb-3">
              {menuItem.title}
            </span>
            {menuItem.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>

      {/* Button Logout */}
      <button className="flex w-full items-center px-5 py-4 gap-3 my-2 hover:bg-blue-400 rounded-lg">
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
export default sidebar;
