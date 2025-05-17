import React from "react";

const OrderSummary = ({ count, label, textColor, bgColor, badgeTextColor }) => {
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold ${textColor} mb-2`}>{count}</div>
      <div
        className={`${bgColor} bg-opacity-50 ${badgeTextColor} text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {label}
      </div>
    </div>
  );
};

export default OrderSummary;
