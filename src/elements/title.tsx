import React, { FC } from "react";

type Props = { id: string };

export const Title: FC<Props> = ({ id, children }) => (
  <h2 id={id} className="text-2xl font-bold text-center text-white">
    {children}
  </h2>
);
