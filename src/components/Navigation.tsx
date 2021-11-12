import Hamburger from "hamburger-react";
import { useRouter } from "next/dist/client/router";
import { FC, useState } from "react";
import { Navlink } from "../elements/navlink";

type NavVariant = "mobile" | "desktop";

type BaseProps = {
  className: string;
  onClick?: () => void;
};

const Base: FC<BaseProps> = ({ className, onClick }) => (
  <nav className={className}>
    <Navlink onClick={onClick} href="#angebot">
      Angebot
    </Navlink>
    <Navlink onClick={onClick} href="#ueber-mich">
      Über mich
    </Navlink>
    <Navlink onClick={onClick} href="#kontakt">
      Kontakt
    </Navlink>
  </nav>
);

export const Navigation: FC = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Base className="hidden sm:flex gap-12" />
      <div
        className={`${
          isOpen ? "fixed top-6 right-12" : "block"
        } sm:hidden z-20`}
      >
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          color="#dd6b20"
          label="Open Menu"
          rounded
        />
      </div>
      <Base
        onClick={() => setOpen(!open)}
        className={[
          "flex flex-col transform",
          isOpen ? "translate-x-0" : "translate-x-full",
          "transition-transform ease-in-out duration-500 fixed top-0 right-0 w-full h-screen items-center gap-8 pt-24 bg-white z-10",
        ].join(" ")}
      />
    </>
  );
};
