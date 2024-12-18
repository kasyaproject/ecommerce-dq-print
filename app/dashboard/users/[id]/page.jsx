import { Label, Select, Textarea, TextInput } from "flowbite-react";

const DetailUserPage = () => {
  const username = "Andika";
  const email = "Andika";
  const phone = "Andika";
  const address = "Andika";
  const role = "Admin";
  const status = "notActive";

  return (
    <div className="flex gap-12 mt-5 dark">
      <div className="flex-1 p-5 rounded-md bg-bgSoft h-fit">
        <div className="relative w-full overflow-hidden rounded-md h-72">
          <img src="/noavatar.png" alt="avatar" className="object-fill" />
        </div>
        <p className="mt-2">Change img</p>
      </div>

      <div className="flex-[3_3_0%] bg-bgSoft p-5 rounded-md">
        <h1 className="mb-4 text-2xl font-semibold">Users Detail</h1>
        <form className="flex flex-col w-full gap-4">
          {/* username */}
          <div>
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
              placeholder={username}
              required
            />
          </div>

          {/* email */}
          <div>
            <div className="block mb-2">
              <Label className="text-white" htmlFor="eamil" value="Email" />
            </div>
            <TextInput
              id="email"
              type="text"
              name="email"
              placeholder={email}
              required
            />
          </div>

          {/* phone */}
          <div>
            <div className="block mb-2">
              <Label className="text-white" htmlFor="phone" value="Phone" />
            </div>
            <TextInput
              id="phone"
              type="number"
              name="phone"
              placeholder={phone}
              required
            />
          </div>

          {/* Addres */}
          <div>
            <div className="block mb-2">
              <Label htmlFor="address" value="Address user" />
            </div>
            <Textarea
              id="address"
              placeholder={address}
              name="address"
              required
              className="min-h-40 max-h-80"
              rows={7}
            />
          </div>

          {/* Field input Role & Status user */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="block mb-2">
                <Label
                  className="text-white"
                  htmlFor="role"
                  value="Select user role"
                />
              </div>
              <Select id="role" name="role" required>
                <option value="True" selected={role === "True"}>
                  Admin
                </option>
                <option value="False" selected={role === "False"}>
                  Not Admin
                </option>
              </Select>
            </div>

            <div>
              <div className="block mb-2">
                <Label
                  className="text-white"
                  htmlFor="status"
                  value="Select user status"
                />
              </div>
              <Select id="status" name="status" required>
                <option value="True" selected={status === "True"}>
                  Active
                </option>
                <option value="False" selected={status === "False"}>
                  Not Active
                </option>
              </Select>
            </div>
          </div>

          {/* Button SUbmit */}
          <button className="w-full py-2 mt-4 bg-blue-600 rounded-md hover:bg-blue-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default DetailUserPage;
