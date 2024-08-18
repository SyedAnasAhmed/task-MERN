import React from "react";

const Hero2 = () => {
  return (
    <>
      <div className="w-[90%] h-[80%] flex mx-auto justify-evenly mt-3">
        <div className="w-[28%] h-[100%]  flex flex-col gap-3 py-3  justify-center  bg-white ">
          <div className="px-2">
            <h1 className="font-bold text-xl">More reasons to shop</h1>
          </div>

          <div className="flex w-48  gap-3">

            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/d5ea7157-ef25-4dcd-bfdb-167e97b8923f.png?format=avif"
              alt=""
              className="pl-2"
            />
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/cee908c3-d779-4157-81fc-9758f28fa91d.png?format=avif"
              alt=""
              className="pr-1"
            />
          </div>

          <div className="flex w-48 gap-3">
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/846500f2-70b4-4382-99ed-05cbe4eb79e9.png?format=avif"
              alt=""
              className="pl-1"
            />
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/2c9c92a4-a051-474d-952d-c58140fd48c0.png?format=avif"
              alt=""
              className="pr-1"
            />
          </div>
        </div>



        <div className="w-[30%] h-[50%]">
          <h3>Mega Deals</h3>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="w-[30%] h-[50%]">
          <h3>In Focus</h3>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
