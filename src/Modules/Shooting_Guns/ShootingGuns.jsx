import { debounce, throttle } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { GiM3GreaseGun } from "react-icons/gi";

const ShootingGuns = () => {

  const  [triggerPressed, setTriggerPress] = useState(false);

  const [shootCount, setShoutCount] = useState(0);
  const [t_shoutCount, setT_shoutCount] = useState(0);
  const [d_shoutCount, setD_shoutCount] = useState(0);

  // const handleDebouncedClick = useCallback(
  //   debounce(() => {
  //     setD_shoutCount((prevCount) => prevCount + 1);
  //   }, 2000),
  //   []
  // );

  // const handleThrottledClick = useCallback(
  //   throttle(() => {
  //     setT_shoutCount((prevCount) => prevCount + 1);
  //   }, 2000),
  //   []
  // );

  // const bulletHandeler = () => {
  //   setShoutCount((prev) => prev + 1);
  //   handleThrottledClick();
  //   handleDebouncedClick();
  // };

  const deBounce = () =>
  {

  }

  const bulletHandeler = () =>
  {
    

  }

  useEffect(()=>{
   let timer = setTimeout(()=>{
    

   },2000)
  },[])

  return (
    <div className="w-[80%] m-auto mt-10">
      <h1 className="text-3xl font-semibold">Shooting Guns</h1>
      <h2 className="mt-10">Total Shoot = {shootCount}</h2>
      <div className="p-2 mt-10 grid grid-cols-5">
        <div className="grid-cols-1 flex flex-row items-center">
          <span
            onClick={bulletHandeler}
            className="w-[70px] h-[70px] rounded-full bg-red-400 hover:bg-blue-500 cursor-pointer flex justify-center items-center p-2 text-black font-bold"
          ></span>
        </div>

        <div className="col-span-4 ">
          {/* Normal Gun */}
          <div className="h-[150px]">
            <h2 className="font-bold bg-yellow-400 text-black w-[200px] p-2 my-2 text-center rounded-xl">
              Normal Gun
            </h2>
            <div className="flex items-center gap-10 ">
              <GiM3GreaseGun className="text-[100px] mx-5 text-center" />
              <span className="font-bold bg-sky-300 text-black p-4 rounded-xl w-[300px] text-center">
                Bullet shoot: {shootCount}
              </span>
            </div>
          </div>
          {/* Throttling Gun */}
          <div className="h-[150px]">
            <h2 className="font-bold bg-yellow-400 text-black w-[200px] p-2 my-2 text-center rounded-xl">
              Throttling Gun
            </h2>
            <div className="flex items-center gap-10">
              <GiM3GreaseGun className="text-[100px] mx-5 text-center" />
              <span className="font-bold bg-sky-300 text-black p-4 rounded-xl w-[300px] text-center">
                Bullet shoot:{t_shoutCount}
              </span>
            </div>
          </div>
          {/* Debouncing Gun */}
          <div className="h-[150px]">
            <h2 className="font-bold bg-yellow-400 text-black w-[200px] p-2 my-2 text-center rounded-xl">
              Debouncing Gun
            </h2>
            <div className="flex items-center gap-10">
              <GiM3GreaseGun className="text-[100px] mx-5 text-center" />
              <span className="font-bold bg-sky-300 text-black p-4 rounded-xl w-[300px] text-center">
                Bullet shoot:{d_shoutCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShootingGuns;
