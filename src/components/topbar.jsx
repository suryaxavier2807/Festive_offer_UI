import { IoSearchCircle,IoNotificationsCircle   } from "react-icons/io5";
import { BiSolidNavigation } from "react-icons/bi";

export default function Topbar() {
  return (
    <div className="flex justify-between bg-green-">
      <div className="">
        <div className="flex">
            <BiSolidNavigation className="mt-1" size={20} color="#002D62"/>
            <h2 className=" text-[#002D62] font-medium text-xl ">Noida</h2>
        </div>
        
        <p className="text-[10px] text-gray-400">19,4th Floor,Sector 63 Noida Uttar Pradesh...</p>

      </div>
      <div className="flex ">
        <div>
          <IoSearchCircle
          size={38}
          color="#002D62"/>
        </div>
        <div>
          <IoNotificationsCircle
          size={38} color="#B59410"/>
        </div>
      </div>
    </div>
  );
}
