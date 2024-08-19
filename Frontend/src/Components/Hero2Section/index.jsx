import React from "react";
import styles from './styles.module.css'

const Hero2 = () => {
  return (
    <>
      <div className={`w-[95%] h-[80%] flex mx-auto justify-center gap-5 ${styles.maindiv} mt-3`}>
        <div className={`w-[30%] h-[100%]  flex flex-col gap-3 py-3  justify-center  bg-white ${styles.div1} `}>
          <div className="px-2">
            <h1 className="font-bold text-xl">More reasons to shop</h1>
          </div>

          <div className="flex w-52  gap-3">
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/d5ea7157-ef25-4dcd-bfdb-167e97b8923f.png?format=avif"
              alt=""
              className="pl-1"
              />
            <img
              src="https://f.nooncdn.com/mpcms/EN0001/assets/cee908c3-d779-4157-81fc-9758f28fa91d.png?format=avif"
              alt=""
              className="pr-1"
            />
          </div>

          <div className="flex w-52 gap-3">
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

        <div className={`w-[30%] h-[100%]  flex flex-col gap-3 py-3  justify-center ${styles.div1}  bg-white `}>
          <div className="px-2">
            <h1 className="font-bold text-xl">Mega deals</h1>
          </div>

          <div className="flex w-52  gap-3">
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

          <div className="flex w-52 gap-3">
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
        <div className={`w-[30%] h-[100%]  flex flex-col gap-3 py-3  justify-center ${styles.div1}  bg-white `}>
          <div className="px-3">
            <h1 className="font-bold text-xl">In focus</h1>
          </div>

          <div className="flex   gap-3">
            <img
              src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01.1723807601.933908.png?format=avif  "
              alt=""
              className="px-3"
            />
          </div>

          <div className="flex  gap-3">
            <img
              src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-02%20(53).1723450444.7205064.png?format=avif"
              alt=""
              className="px-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
