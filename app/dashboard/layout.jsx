import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1 bg-bgSoft p-5 min-h-screen">
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
