import React from "react";
import Button from "./Button";

const OrderdItem = ({
  id,
  customerName,
  items,
  ammount,
  status,
  setOrderedItem,
}) => {
  
  const handleDelete = (clickedId) => {
    setOrderedItem((prev) => prev.filter((item) => item.itemId !== clickedId));
  };

  const handleDeliver = (clickedId) => {
    setOrderedItem((prev) =>
      prev.map((item) =>
        item.itemId === clickedId ? { ...item, status: "DELIVERED" } : item
      )
    );
  };

  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{ammount}</td>
      <td className="py-3">
        <span className={status === "DELIVERED" ? "text-green-500" : "text-red-500"}>
          {status}
        </span>
      </td>
      <td className="py-3">
        <Button
          lable="DELETE"
          hoverColor="bg-red-600"
          onClick={() => handleDelete(id)}
        />
        {status !== "DELIVERED" && (
          <Button
            lable="DELIVER"
            hoverColor="bg-green-600"
            onClick={() => handleDeliver(id)}
          />
        )}
      </td>
    </tr>
  );
};

export default OrderdItem;
