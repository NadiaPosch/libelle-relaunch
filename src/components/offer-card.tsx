import { FC } from "react";
import { DownloadIcon } from "../elements/download-icon";

export type Offer = {
  title: string;
  from: number;
  to?: number;
};

type OfferCardProps = {
  title: string;
  offers: Offer[];
  link?: string;
};

export const OfferCard: FC<OfferCardProps> = ({ title, offers, link = "" }) => (
  <div className="w-full flex flex-col gap-y-2 rounded-lg shadow-lg p-5 sm:p-8 bg-gradient-to-b from-yellow-500 to-yellow-400">
    <div className="flex justify-between items-center">
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      {link && (
        <a
          href={link}
          target="_blank"
          className="bg-white rounded-full p-1 text-yellow-600"
        >
          <DownloadIcon />
        </a>
      )}
    </div>
    <div className="flex flex-col divide-y divide-white divide-opacity-50">
      {offers.map(({ title, from, to }) => (
        <div key={title} className="flex flex-wrap justify-between py-2">
          <h4>{title}</h4>
          <div>{to ? `${from} - ${to} CHF` : `ab ${from} CHF`}</div>
        </div>
      ))}
    </div>
  </div>
);
