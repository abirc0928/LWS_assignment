import React from "react";
import NavItem from "./NavItem";

const navItem = [
  {
    title1: "Dine",
    title2: "Out",
    image: "logo.svg",
    img_classes1: 'text-primary mr-2',
    img_classes2: "",
  },

  {
    title1: "",
    title2: "",
    image: "user-icon.svg",
    img_classes1: "",
    img_classes2: 'h-10',
  },
];

const Navbar = () => {
  return (
    <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      {navItem.map(({ title1, title2, image, img_classes1, img_classes2  }) => (
        <NavItem
          title1={title1}
          title2={title2}
          image={image}
          img_classes1={img_classes1}
          img_classes2={img_classes2}
        ></NavItem>
      ))}
    </nav>
  );
};

export default Navbar;
