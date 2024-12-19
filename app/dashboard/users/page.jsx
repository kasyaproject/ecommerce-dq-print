import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const { countUser, users } = await fetchUsers(search, page);

  return (
    <div className="p-4 mt-5 rounded-md bg-bgSoft">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for User..." />

        <Link href="/dashboard/users/add">
          <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg">
            Add New +
          </button>
        </Link>
      </div>

      <div className="p-1 mt-4 rounded-md">
        <table className="w-full mb-4">
          <thead className="">
            <tr className="text-center">
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="text-xs text-center hover:bg-gray-700 sm:text-base"
              >
                <td>
                  <div className="flex items-center gap-2">
                    <img
                      src={user.img || "/noavatar.png"}
                      alt="avatar"
                      className="w-6 h-6 rounded-full sm:w-10 sm:h-10"
                    />
                    <div className="flex flex-col items-start ">
                      <p className="font-semibold ">{user.fullname}</p>
                      <p className="text-sm font-semibold text-gray-400">
                        {user.username}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-start">{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <p className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-green-600 rounded-full">
                      Admin
                    </p>
                  ) : (
                    <p className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-gray-400 rounded-full">
                      Client
                    </p>
                  )}
                </td>
                <td>
                  {user.isActive ? (
                    <p className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-blue-600 rounded-full">
                      Active
                    </p>
                  ) : (
                    <p className="inline-block px-2 py-0.5 text-xs font-semibold text-white bg-red-600 rounded-full">
                      Not Active
                    </p>
                  )}
                </td>
                <td>
                  <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="px-2 py-0.5 bg-green-600 font-semibold rounded-md text-xs sm:text-sm hover:bg-green-700">
                        View
                      </button>
                    </Link>
                    <Link href="">
                      <button className="px-2 py-0.5 bg-red-600 font-semibold rounded-md text-xs sm:text-sm hover:bg-red-700">
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination count={countUser} />
      </div>
    </div>
  );
};
export default UsersPage;
