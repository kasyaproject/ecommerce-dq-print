import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import RightBar from "../ui/dashboard/rightBar/RightBar";
import Transaction from "../ui/dashboard/transaction/Transaction";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      {/* Main Bar */}
      <div className="flex flex-[3_3_0%] flex-col gap-5">
        {/* Card Section */}
        <div className="flex justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>

        {/* Transaction Section */}
        <Transaction />

        {/* Chart Section */}
        <Chart />
      </div>

      {/* Right Bar */}
      <div className=" flex-1">
        <RightBar />
      </div>
    </div>
  );
};
export default Dashboard;
