import React, { useEffect, useRef, useState } from "react";
import ItemList from "./ItemList";
const menuItems = [
  {
    id: 1,
    name: "Hamburger",
    price: "300",
    img: "hamburger.svg",
  },
  {
    id: 2,
    name: "Chicken Nuggets",
    price: "200",
    img: "chicken.svg",
  },
  {
    id: 3,
    name: "Submarine Sandwich",
    price: "250",
    img: "submarine.svg",
  },
  {
    id: 4,
    name: "Pizza slices",
    price: "100",
    img: "pizza.svg",
    bg: "bg-yellow-600",
  },
  {
    id: 5,
    name: "French Fries",
    price: "120",
    img: "french-fries.png",
    
  },
  {
    id: 6,
    name: "Hot Dog",
    price: "180",
    img: "HotDog.png",
   
  },
  {
    id: 7,
    name: "Taco",
    price: "220",
    img: "Taco.png",
   
  },
  {
    id: 8,
    name: "Grilled Sandwich",
    price: "240",
    img: "GrilledSandwich.jpg",
    
  },
  {
    id: 9,
    name: "Cheese Pasta",
    price: "260",
    img: "CheesePasta.jpg",
   
  },
  {
    id: 10,
    name: "Fried Chicken",
    price: "280",
    img: "FriedChicken.jpg",
  
  },
];


const CreactOrder = ({ orderedItem, setOrderedItem }) => {
  const [addToCart, setAddToCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemId, setItemId] = useState(1);
  const customerName = useRef(null);
  let total = 0;
  // let itemId = 1

  useEffect(() => {
    addToCart.map((item) => {
      total += parseInt(menuItems[item].price);
    });
    setTotalPrice(total);
  }, [addToCart]);

  const handelPlaceOrder = () => {
    const order = {
      itemId: itemId,
      customerName: customerName.current.value,
      items: addToCart.length,
      ammount: totalPrice,
      status: "PENDING",
    };

    setOrderedItem((prevItem) => {
      return [...prevItem, order];
    });
    setAddToCart([]);
    setItemId((prev) => prev + 1);
    customerName.current.value = "";
  };

  console.log(orderedItem);
  const [isAdd, setIsAdd] = useState(false);
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* <!-- Customer Name Input --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          ref={customerName}
        />
      </div>

      {/* <!-- Choose Items --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {/* <!-- Item  --> */}

          {menuItems.map(({ id, name, price, img, bg }, index) => (
            <ItemList
              key={index}
              id={index}
              name={name}
              price={price}
              img={img}
              bg={bg}
              addToCart={addToCart}
              setAddToCart={setAddToCart}
              isAdd={isAdd}
              setIsAdd={setIsAdd}
            ></ItemList>
          ))}
        </div>
      </div>

      {/* <!-- Place Order Button --> */}
      <button
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        onClick={handelPlaceOrder}
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
};

export default CreactOrder;
