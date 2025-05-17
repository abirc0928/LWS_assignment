import React, { useEffect, useState } from "react";
import PlusIconSVG from "./SVG/PlusIconSVG";
import MinusIconSVG from "./SVG/MinusIconSVG";

const ItemList = ({
  id,
  name,
  price,
  img,
  bg,
  addToCart,
  setAddToCart,
  isAdd,
  setIsAdd,
}) => {
  const addItem = (itemid) => {
    setAddToCart((prevCart) => {
      if (prevCart.includes(itemid)) {
        return prevCart.filter((id) => id !== itemid);
      } else {
        return [...prevCart, itemid];
      }
    });
  };

 

  return (
    <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
      <div className="flex items-center">
        <div
          className={`w-12 h-12 flex items-center justify-center mr-3 ${
            bg || ""
          }`}
        >
          <img src={img} alt="Hamburger" className="w-10 h-10" />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-gray-400">BDT {price}</p>
        </div>
      </div>
      <button
        className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
        onClick={() => {
          addItem(id);
          setIsAdd(!isAdd);
        }}
      >
        {addToCart.includes(id) ? <MinusIconSVG /> : <PlusIconSVG />}
      </button>
    </div>
  );
};

export default ItemList;
