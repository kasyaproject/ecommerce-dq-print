import { Label, Select, Textarea, TextInput } from "flowbite-react";

const AddUsersPage = () => {
  return (
    <div className="p-4 mt-4 rounded-md dark bg-bgSoft">
      <h2 className="mb-4 text-2xl font-bold">Add New User</h2>
      <form className="flex flex-col w-full gap-4">
        {/* Field input Username & Email user */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="username"
                value="Username user"
              />
            </div>
            <TextInput
              id="username"
              type="text"
              name="username"
              placeholder="Enter username user..."
              required
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="email"
                value="Email user"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              name="email"
              placeholder="Enter email user..."
              required
            />
          </div>
        </div>

        {/* Field input Password & Confirm Password user */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="password"
                value="Password user"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              name="password"
              placeholder="Enter password user..."
              required
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="ConfirmPasssword"
                value="Confirm passsword user"
              />
            </div>
            <TextInput
              id="ConfirmPasssword"
              type="passsword"
              name="ConfirmPasssword"
              placeholder="Enter passsword user..."
              required
            />
          </div>
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
              <option value="general">Choose a user role...</option>
              <option value="True">Admin</option>
              <option value="False">Not Admin</option>
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
              <option value="general">Choose a user status...</option>
              <option value="True">Active</option>
              <option value="False">Not Active</option>
            </Select>
          </div>
        </div>

        {/* Field input Addres user */}
        <div>
          <div className="block mb-2">
            <Label htmlFor="address" value="Address user" />
          </div>
          <Textarea
            id="address"
            placeholder="Enter address user..."
            name="address"
            required
            className="min-h-40 max-h-80"
            rows={7}
          />
        </div>

        {/* Field input Phone user */}
        <div>
          <div className="block mb-2">
            <Label
              className="text-white"
              htmlFor="phone"
              value="Phone number user"
            />
          </div>
          <TextInput
            id="phone"
            type="number"
            name="phone"
            placeholder="Enter phone number user..."
            required
          />
        </div>

        {/* Button SUbmit */}
        <button className="w-full py-2 bg-blue-600 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddUsersPage;
