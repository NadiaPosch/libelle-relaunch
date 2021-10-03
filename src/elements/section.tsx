import { FC } from "react";
import { Title } from "./title";

type Props = {
  id: string;
  title?: string;
  className?: string;
};
export const Section: FC<Props> = ({ title, id, children, className = "" }) => (
  <div className={`pt-12 px-8 mb-12 min-h-screen ${className}`}>
    {title && <Title id={id}>{title}</Title>}
    {children}
  </div>
);
