"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center px-5 py-4 gap-3 my-2 hover:bg-blue-400 rounded-lg ${
        pathname === item.path && "bg-gray-700"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
export default menuLink;
