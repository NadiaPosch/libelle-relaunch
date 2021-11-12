import React, { FC } from "react";

type Props = {
  href: string;
  onClick?: () => void;
};

export const Navlink: FC<Props> = ({ href, onClick, children }) => (
  <a
    onClick={onClick}
    href={href}
    className="transition-colors duration-200 text-yellow-600 hover:text-yellow-400 text-2xl sm:text-base"
  >
    {children}
  </a>
);
