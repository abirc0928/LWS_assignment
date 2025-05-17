import React, { useEffect, useState } from "react";
import CreactOrder from "./CreactOrder";
import PlaceOrder from "./PlaceOrder";

const MainContent = () => {
  const [orderedItem, setOrderedItem] = useState([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreactOrder
        orderedItem={orderedItem}
        setOrderedItem={setOrderedItem}
      ></CreactOrder>
      <PlaceOrder
        orderedItem={orderedItem}
        setOrderedItem={setOrderedItem}
      ></PlaceOrder>
    </div>
  );
};

export default MainContent;
