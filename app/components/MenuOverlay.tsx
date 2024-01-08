import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
  links: {
    title: string;
    path: string;
  }[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
