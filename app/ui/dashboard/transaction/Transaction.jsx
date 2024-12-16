import Image from "next/image";

const Transaction = () => {
  const status = "done";

  return (
    <div className="bg-bgSoft p-5 rounded-md">
      <h2 className="mb-5 text-textSoft">Latest Transactions</h2>

      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Colloum Nama */}
            <td className="flex items-center gap-2">
              {/* Avatar */}
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className="object-cover rounded-full"
              />
              {/* Name */}
              Andika Syamsiana
            </td>

            {/* Colloum Status */}
            <td>
              {status === "done" && (
                <span className="bg-blue-600 text-white text-sm rounded-md px-2 py-0.5">
                  Done
                </span>
              )}
              {status === "pending" && (
                <span className="bg-yellow-600 text-white text-sm rounded-md px-2 py-0.5">
                  Pending
                </span>
              )}
              {status === "cancelled" && (
                <span className="bg-red-600 text-white text-sm rounded-md px-2 py-0.5">
                  Cancelled
                </span>
              )}
            </td>

            {/* Colloum Date */}
            <td>14.02.1998</td>

            {/* Colloum Amount */}
            <td>Rp. 230.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Transaction;
