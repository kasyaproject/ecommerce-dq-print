"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const itemPerPage = 10;

  const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemPerPage * (parseInt(page) - 1) + itemPerPage < count;

  const handleChangeClickPage = (type) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between p-2">
      <button
        className={`px-4 py-1.5 rounded-md font-semibold ${
          hasPrev ? "bg-slate-600 hover:bg-slate-700" : "bg-slate-800"
        }`}
        disabled={!hasPrev}
        onClick={() => handleChangeClickPage("prev")}
      >
        Previous
      </button>
      <button
        className={`px-4 py-1.5 rounded-md font-semibold ${
          hasNext ? "bg-slate-600 hover:bg-slate-700" : "bg-slate-800"
        }`}
        disabled={!hasNext}
        onClick={() => handleChangeClickPage("next")}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
