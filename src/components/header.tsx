import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import { Navlink } from "../elements/navlink";

export const Header = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="sticky top-0 w-full px-12 py-2 bg-white bg-opacity-75 z-10">
      <div className="max-w-3xl flex justify-between items-center w-full mx-auto">
        <a href="#home">
          <div
            className={`transform transition-all duration-500 ${
              isShrunk ? "h-10 w-10 rotate-12" : "h-20 w-20 -rotate-12"
            }`}
          >
            <NextImage src="/dragonfly_line.svg" layout="fill" />
          </div>
        </a>
        <div className="flex gap-12">
          <Navlink href="#angebot">Angebot</Navlink>
          <Navlink href="#ueber-mich">Über mich</Navlink>
          <Navlink href="#kontakt">Kontakt</Navlink>
        </div>
      </div>
    </header>
  );
};
