import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div
        className={`w-full h-[65px] ${styles.Header}  flex justify-around`}
      >
        <div
          className={`flex h-full justify-around items-center ${styles.logos}`}
        >
          <img
            src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
            width={90}
            alt=""
          />
          <img
            src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg"
            alt=""
          />
          <div className="text-sm">
            <p>Deliver to</p>
            <p className="font-bold">Dubai</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="px-2 py-2 rounded-md "
            size={115}
            name=""
            id=""
          />
        </div>
        <div className={`flex justify-around items-center ${styles.btns}`}>
          <p lang="ar">Al-Arabi</p>
          <div className={` ${styles.separator}`}></div>
          <p className="font-semibold">Login</p>
          <FontAwesomeIcon icon={faUser} />
          <div className={`${styles.separator}`}></div>
          <p className="font-semibold">Wishlist</p>
          <FontAwesomeIcon icon={faHeart} />
          <div className={`${styles.separator}`}></div>
          <p className="font-semibold">Cart</p>
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </>
  );
};

export default Header;
