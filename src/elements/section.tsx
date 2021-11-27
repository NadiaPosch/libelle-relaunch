import { FC } from "react";
import { Title } from "./title";

type Props = {
  id: string;
  title?: string;
  className?: string;
};
export const Section: FC<Props> = ({ title, id, children, className = "" }) => (
  <div id={id} className={`pt-12 px-4 sm:px-8 min-h-screen ${className}`}>
    {title && <Title>{title}</Title>}
    {children}
  </div>
);
