const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-2">
      <button
        className="px-4 py-1.5 rounded-md bg-slate-600 hover:bg-slate-700 font-semibold"
        disabled
      >
        Previous
      </button>
      <button className="px-4 py-1.5 rounded-md bg-slate-600 hover:bg-slate-700 font-semibold">
        Next
      </button>
    </div>
  );
};
export default Pagination;
