import React, { useEffect, useState } from "react";
import { FaStar, FaHeart, FaShoppingCart, FaCheckCircle } from "react-icons/fa"; // Importing icons from react-icons
import axios from "axios";
import styles from './styles.module.css'

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className={`w-[92%] flex flex-wrap justify-evenly ${styles.maindiv} gap-3 items-center mx-auto`}>
      {products.map((product) => (
        <div className={`border rounded-lg shadow-sm p-4 ${styles.innerdiv} w-56 bg-white`}>
          <div className="flex justify-between items-center mb-2">
            <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-xl">
              Best Seller
            </span>
            <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
          </div>
          <img
            src={product.imageURL}
            alt="Apple iPhone 15 Pro Max"
            className="w-full h-60 object-cover mb-2 "
          />
          <div className="flex items-center justify-between text-green-600 mb-2">
            <div className="flex justify-evenly items-center">
              <span className="text-sm font-bold">4.6</span>
              <FaStar className="mr-1" />
              <span className="text-xs text-gray-500 ml-1">(4.2K)</span>
            </div>
            <div>
              <FaShoppingCart />
            </div>
          </div>

          <div className="bg-white">
            <h3 className="text-sm font-semibold text-gray-600 mb-1">{product.desc}</h3>
            <div className="text-sm font-light mb-1 flex items-center text-gray-800">
              AED:
              <p className="text-lg font-semibold">{product.price}</p>
              <span className="text-gray-500 line-through text-sm">
                150000
              </span>{" "}
              <span className="text-green-600 text-sm">17% off</span>
            </div>
            <div className="text-yellow-600 text-xs flex items-center mb-2">
              <FaCheckCircle className="mr-1" />
              <span>Selling out fast</span>
            </div>
            <button className="bg-yellow-300 text-black font-bold text-sm py-2 rounded-lg flex items-center justify-center w-full">
              GET IN 57 MINS
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
