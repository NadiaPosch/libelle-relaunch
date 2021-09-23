import React, { FC } from "react";

type Props = {
  href: string;
};

export const Navlink: FC<Props> = ({ href, children }) => (
  <a
    href={href}
    className="transition-colors duration-200 text-orange-600  hover:text-orange-400"
  >
    {children}
  </a>
);
