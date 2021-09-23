import { FC } from "react";
import { Title } from "./title";

type Props = {
  title: string;
  id: string;
};
export const Section: FC<Props> = ({ title, id, children }) => (
  <div className="mb-12 min-h-screen">
    <Title id={id}>{title}</Title>
    {children}
  </div>
);
