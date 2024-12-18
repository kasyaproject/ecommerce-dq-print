import { Label, Select, Textarea, TextInput } from "flowbite-react";

const DetailProductPage = () => {
  const name = "Andika";
  const categories = "Computer";
  const price = 50000;
  const stock = 23;
  const color = "Andika";
  const size = "Andika";
  const description = "Andika";

  return (
    <div className="flex gap-12 mt-5 dark">
      <div className="flex-1 p-5 rounded-md bg-bgSoft h-fit">
        <div className="relative w-full overflow-hidden rounded-md h-72">
          <img src="/noavatar.png" alt="avatar" className="object-fill" />
        </div>
        <p className="mt-2">Change img</p>
      </div>

      <div className="flex-[3_3_0%] bg-bgSoft p-5 rounded-md">
        <h1 className="mb-4 text-2xl font-semibold">Product Detail</h1>
        <form className="flex flex-col w-full gap-4">
          {/* Field detail Name */}
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="nameProduct"
                value="Produk Name"
              />
            </div>
            <TextInput
              id="nameProduct"
              type="text"
              name="name"
              placeholder={name}
              required
            />
          </div>

          {/* Field detail Categories */}
          <div>
            <div className="block mb-2">
              <Label
                className="text-white"
                htmlFor="categories"
                value="Product categories"
              />
            </div>
            <Select id="categories" name="categories" required>
              <option value="Kitchen" selected={categories === "Kitchen"}>
                Kitchen
              </option>
              <option value="Phone" selected={categories === "Phone"}>
                Phone
              </option>
              <option value="Computer" selected={categories === "Computer"}>
                Computer
              </option>
            </Select>
          </div>

          {/* Field detail Price & Stock Product */}
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
                placeholder={`Rp. ${price}`}
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
                placeholder={stock}
                required
              />
            </div>
          </div>

          {/* Field detail Color & Size Product */}
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
                placeholder={color}
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
                placeholder={size}
                required
              />
            </div>
          </div>

          {/* Field detail Descriptions Product */}
          <div className="w-full">
            <div className="block mb-2">
              <Label htmlFor="descriptions" value="Product Descriptions" />
            </div>
            <Textarea
              id="descriptions"
              name="descriptions"
              placeholder={description}
              required
              className="min-h-40 max-h-80"
              rows={8}
            />
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
export default DetailProductPage;
