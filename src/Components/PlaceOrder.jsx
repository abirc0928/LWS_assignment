import React, { useEffect, useState } from "react";
import OrderdItem from "./OrderdItem";
import OrderSummary from "./OrderSummary";
import FilterIconSVG from "./SVG/FilterIconSVG";

const PlaceOrder = ({ orderedItem, setOrderedItem }) => {
  const [summary, setSummary] = useState([
    {
      count: 0,
      label: "Total Order",
      textColor: "text-yellow-500",
      bgColor: "bg-yellow-800",
      badgeTextColor: "text-yellow-200",
    },
    {
      count: 0,
      label: "Pending",
      textColor: "text-red-500",
      bgColor: "bg-red-800",
      badgeTextColor: "text-red-200",
    },
    {
      count: 0,
      label: "Delivered",
      textColor: "text-green-500",
      bgColor: "bg-green-800",
      badgeTextColor: "text-green-200",
    },
  ]);

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const total = orderedItem.length;
    const pending = orderedItem.filter(
      (item) => item.status === "PENDING"
    ).length;
    const delivered = orderedItem.filter(
      (item) => item.status === "DELIVERED"
    ).length;

    setSummary((prev) =>
      prev.map((item) => {
        if (item.label === "Total Order") return { ...item, count: total };
        if (item.label === "Pending") return { ...item, count: pending };
        if (item.label === "Delivered") return { ...item, count: delivered };
        return item;
      })
    );
  }, [orderedItem]);

  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {summary.map(
            ({ count, label, textColor, bgColor, badgeTextColor }, key) => (
              <OrderSummary
                key={key}
                count={count}
                label={label}
                textColor={textColor}
                bgColor={bgColor}
                badgeTextColor={badgeTextColor}
              />
            )
          )}
        </div>
      </div>

      {/* Order Reports */}
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>
          <div className="flex gap-4 items-center">
            <FilterIconSVG />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="!appearance-none !bg-zinc-900 !text-white !px-2 !py-1 !border-none !outline-none !rounded-sm"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>

        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {orderedItem
                  .filter((item) =>
                    filter === "All"
                      ? true
                      : item.status === filter.toUpperCase()
                  )
                  .slice()
                  .reverse()
                  .map(
                    (
                      {
                        itemId,
                        customerName,
                        items,
                        ammount,
                        status,
                        statusClass,
                      },
                      index
                    ) => (
                      <OrderdItem
                        key={index}
                        id={itemId}
                        customerName={customerName}
                        items={items}
                        ammount={ammount}
                        status={status}
                        statusClass={statusClass}
                        setOrderedItem={setOrderedItem}
                      />
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
