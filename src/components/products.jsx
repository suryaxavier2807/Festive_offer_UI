import curdIcon from "../assets/pride-of-cows-curd.jpg";

export default function Products() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="">

        <div className="bg-white rounded-lg  w-full pt-2 ">
          <div className="overflow-hidden mb-1 pt-2">
            <img
              className="w-full h-24 object-cover mix-blend-multiply"
              src={curdIcon}
              alt="Curd 320g"
            />
          </div>

          <p className=" font-medium mt-2 pl-1 ">Curd 320g</p>

          <p className=" text-lg font-semibold pl-1">₹95</p>

          <div className="flex justify-evenly pb-1 pt-1 ">
            <button className="bg-[#002D62] text-white  p-1 px-2 rounded-lg ">
              Add
            </button>
            <button className="bg-[#B59410] text-white  p-1 px-2  rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-2">
        <div className="bg-white rounded-lg  w-full pt-2 ">
          <div className="overflow-hidden mb-1 pt-2">
            <img
              className="w-full h-24 object-cover mix-blend-multiply"
              src={curdIcon}
              alt="Curd 320g"
            />
          </div>

          <p className=" font-medium mt-2 pl-1 ">Ghee 200ml</p>

          <p className=" text-lg font-semibold pl-1">₹95</p>

          <div className="flex justify-evenly pb-1 pt-1 ">
            <button className="bg-[#002D62] text-white  p-1 px-2 rounded-lg ">
              Add
            </button>
            <button className="bg-[#B59410] text-white  p-1 px-2  rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>


      




      <div className="">

        <div className="bg-white rounded-lg  w-full pt-2 ">
          <div className="overflow-hidden mb-1 pt-2">
            <img
              className="w-full h-24 object-cover mix-blend-multiply"
              src={curdIcon}
              alt="Curd 320g"
            />
          </div>

          <p className=" font-medium mt-2 pl-1 ">Milk 1L</p>

          <p className=" text-lg font-semibold pl-1">₹120</p>

          <div className="flex justify-evenly pb-1 pt-1 ">
            <button className="bg-[#002D62] text-white  p-1 px-2  rounded-lg ">
              Add
            </button>
            <button className="bg-[#B59410] text-white  p-1 px-2   rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="mt-2">
        <div className="bg-white rounded-lg  w-full pt-2 ">
          <div className="overflow-hidden mb-1 pt-2">
            <img
              className="w-full h-24 object-cover mix-blend-multiply"
              src={curdIcon}
              alt="Curd 320g"
            />
          </div>

          <p className=" font-medium mt-2 pl-1 ">Ghee 1L</p>

          <p className=" text-lg font-semibold pl-1">₹2,200</p>

          <div className="flex justify-evenly pb-1 pt-1 ">
            <button className="bg-[#002D62] text-white  p-1 px-2  rounded-lg ">
              Add
            </button>
            <button className="bg-[#B59410] text-white  p-1 px-2   rounded-lg ">
              Subscribe
            </button>
          </div>
        </div>
        </div>
      </div>

    </div>
  );
}
