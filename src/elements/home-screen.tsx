import NextImage from "next/image";
import { FC } from "react";
import { Dragonfly } from "./dragonfly";

export const HomeScreen: FC = () => (
  <div className="min-h-screen scroll-snap-start flex items-center bg-gradient-to-br from-yellow-600 to-yellow-400">
    <div
      id="home"
      className="flex flex-col gap-16 sm:max-w-lg mx-auto px-12 sm:px-0"
    >
      <div className="flex-none text-center">
        <NextImage src="/libelle_logo.svg" width={400} height={150} />
        <p className="italic text-2xl sm:text-4xl text-white">Beauty Lounge</p>
      </div>
      <div className="flex-grow">
        <div className="w-full max-w-sm mx-auto">
          <Dragonfly fillColor="white" />
        </div>
      </div>
    </div>
  </div>
);
