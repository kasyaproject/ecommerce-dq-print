import { Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Link href="/" className="absolute top-6 left-6">
        <div className="flex items-center gap-1 px-4 py-2 rounded-full hover:shadow-blue-600 hover:shadow-sm">
          <IoMdArrowRoundBack className="w-5 h-5" />
          <p className="font-semibold">Kembali</p>
        </div>
      </Link>
      <div className="flex w-full max-w-md mx-auto bg-black rounded-lg bg-opacity-30 backdrop-blur-xl">
        <div className="flex flex-col flex-1 gap-12 p-10">
          <img src="/astronaut.png" className="w-20 h-20 mx-auto" alt="" />

          <form action="" className="w-full gap-4">
            {/* Field Username */}
            <div className="mb-4">
              <div className="block mb-2">
                <Label
                  className="text-white"
                  htmlFor="username"
                  value="Username"
                />
              </div>
              <TextInput
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username..."
                required
              />
            </div>

            {/* Field Password */}
            <div className="mb-4">
              <div className="block mb-2">
                <Label
                  className="text-white"
                  htmlFor="password"
                  value="password"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password..."
                required
              />
            </div>

            <p className="hidden mb-4 text-red-500">
              <span className="font-medium ">Oops!</span> Username or Password
              wrong!
            </p>

            {/* Button Login */}
            <button className="w-full py-2 mt-4 bg-blue-600 rounded-md hover:bg-blue-700">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
