import React from "react";
import styles from "./styles.module.css";
import { faCaretDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <div
        className={`h-[50px]  w-full flex justify-start bg-neutral-50 ${styles.mainNav} `}
      >
        <div
          className={` flex items-center cursor-pointer text-blue-600 justify-evenly ${
            (styles.nunitosansfont, styles.firstlink)
          }`}
        >
          <h4 className="font-bold">ALL CATAGORIES</h4>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div
          className={`flex justify-evenly items-center font-bold cursor-pointer   ${
            (styles.nunitosansfont, styles.links)
          } `}
        >
          <h4>ELECTRONICS</h4>
          <h4>MEN'S FASHION</h4>
          <h4>WOMEN'S FASHION</h4>
          <h4>HOME</h4>
          <h4>BEAUTY & FRAGNANCE</h4>
          <h4>BABY</h4>
          <h4>TOYS</h4>
          <h4>SPORTS</h4>
          <h4>HEALTH & NUTRITION</h4>
          <h4>FOOD</h4>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <div className={styles.noononemain}>
          <div className={`rounded-md ${styles.noonone}`}>
            <img src="../public/images/noononelogo.png" alt="" />
            <p className="">
              <i>FREE DELIVERY</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
