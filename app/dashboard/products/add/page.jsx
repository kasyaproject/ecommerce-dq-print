import { Label, Select, Textarea, TextInput } from "flowbite-react";

const AddProductPage = () => {
  return (
    <div className="p-4 mt-4 rounded-md dark bg-bgSoft">
      <h2 className="mb-4 text-2xl font-bold">Add Product</h2>
      <form className="flex flex-col w-full gap-4">
        {/* Field input Name & categories Product */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="nameProduct"
                value="Product Name"
              />
            </div>
            <TextInput
              id="nameProduct"
              type="text"
              name="name"
              placeholder="Enter product name..."
              required
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="categories"
                value="Select product categories"
              />
            </div>
            <Select id="categories" name="categories" required>
              <option value="general">Choose a category...</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Phone">Phone</option>
              <option value="Computer">Computer</option>
            </Select>
          </div>
        </div>

        {/* Field input Price & Stock Product */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="priceProduct"
                value="Product Price"
              />
            </div>
            <TextInput
              id="priceProduct"
              type="number"
              name="price"
              placeholder="Enter product price..."
              required
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="stockProduct"
                value="Product stock"
              />
            </div>
            <TextInput
              id="stockProduct"
              type="number"
              name="stock"
              placeholder="Enter product stock..."
              required
            />
          </div>
        </div>

        {/* Field input Color & Size Product */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="colorProduct"
                value="Product color"
              />
            </div>
            <TextInput
              id="colorProduct"
              type="text"
              name="color"
              placeholder="Enter product color..."
              required
            />
          </div>
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="sizeProduct"
                value="Product size"
              />
            </div>
            <TextInput
              id="sizeProduct"
              type="text"
              name="size"
              placeholder="Enter product size..."
              required
            />
          </div>
        </div>

        {/* Field input Descriptions Product */}
        <div className="w-full">
          <div className="block mb-2">
            <Label htmlFor="descriptions" value="Product Descriptions" />
          </div>
          <Textarea
            id="descriptions"
            name="descriptions"
            placeholder="Product Descriptions..."
            required
            className="min-h-40 max-h-80"
            rows={8}
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
export default AddProductPage;
