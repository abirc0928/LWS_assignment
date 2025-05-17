import React from "react";

const NavItem = ({title1, title2, image, img_classes1, img_classes2}) => {
  return (
    <div className="flex items-center ">
      <div className={img_classes1}>
        <img src={image} className={img_classes2}/>
      </div>
      <h1 className="text-2xl font-bold">
        <span className="text-primary">{title1}</span>{title2}
      </h1>
    </div>
  );
};

export default NavItem;
