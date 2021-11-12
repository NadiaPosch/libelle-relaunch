import { FC } from "react";

export type Offer = {
  title: string;
  from: number;
  to?: number;
};

type OfferCardProps = {
  title: string;
  offers: Offer[];
};

export const OfferCard: FC<OfferCardProps> = ({ title, offers }) => (
  <div className="w-full flex flex-col gap-y-2 rounded-lg shadow-lg p-8 bg-gradient-to-b from-yellow-500 to-yellow-400">
    <h3 className="text-xl font-bold">{title}</h3>
    <div className="flex flex-col divide-y divide-white divide-opacity-50">
      {offers.map(({ title, from, to }) => (
        <div
          key={title}
          className="flex flex-col sm:flex-row justify-between py-2"
        >
          <h4 className="font-bold">{title}</h4>
          <div>{to ? `${from} - ${to} CHF` : `${from} CHF`}</div>
        </div>
      ))}
    </div>
  </div>
);
