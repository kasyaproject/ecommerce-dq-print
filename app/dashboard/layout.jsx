import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 hidden min-h-screen p-5 sm:flex bg-bgSoft">
        <Sidebar />
      </div>

      <div className="flex-[4_4_0%] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default layout;
