"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="flex items-center w-max  bg-[#2e374a] rounded-full px-4">
      <MdSearch size={20} />
      <input
        type="text"
        className="bg-transparent border-none outline-none focus:ring-transparent"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};
export default Search;
