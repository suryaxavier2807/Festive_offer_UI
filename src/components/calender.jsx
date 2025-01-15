import { useState } from 'react';


export default function Calender() {

    const [activeIcon, setActiveIcon] = useState(null);
    
      function handleClick(date){
        setActiveIcon(date);
      };


  return (
    <div className="bg-yellow- mt-2">
      <div className="flex justify-between">
        <h2 className="font-semibold">This Week</h2>
        <h2 className="text-[#002D62] font-medium">View Calender</h2>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <div key={index} className="mt-2 text-gray-500">
            {day}
          </div>
        ))}

        {[14, 15, 16, 17, 18, 19, 20].map((date, index) => (
          <div onClick={()=>handleClick(date)} key={index} className={`font-medium  ${activeIcon===date?'text-[#B59410]' : 'text-[#002D62]'}` } >
            {date}
          </div>
        ))}
      </div>

      <div className="mt-2 font-medium text-sm">No deliveries for the selected date</div>
    </div>
  );
}


