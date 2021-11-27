import { NextPage } from "next";
import NextImage from "next/image";
import { FC } from "react";
import { OfferCard } from "../components/offer-card";
import { MenOffers, NailOffers, WomenOffers } from "../data/offers";
import { Dragonfly } from "../elements/dragonfly";
import { Section } from "../elements/section";

const LogoBubble: FC = () => (
  <a
    href="#home"
    className="fixed bottom-2 right-2 z-10 flex items-center rounded-full bg-white shadow-xl p-2"
  >
    <div className="h-10 w-10 transform rotate-12">
      <Dragonfly />
    </div>
  </a>
);

const Home: NextPage = () => (
  <div className="flex flex-col">
    <LogoBubble />
    <main className="w-full" id="home">
      <Section
        id="home"
        className="flex items-center bg-gradient-to-br from-yellow-600 to-yellow-400"
      >
        <div className="flex flex-col gap-16 w-full">
          <div className="flex-none text-center">
            <NextImage src="/libelle_logo.svg" width={400} height={150} />
            <p className="italic text-2xl sm:text-4xl text-white">
              Beauty Lounge
            </p>
          </div>
          <div className="flex-grow">
            <div className="w-full max-w-sm mx-auto">
              <Dragonfly fillColor="white" />
            </div>
          </div>
        </div>
      </Section>
      <Section id="angebot" title="Angebot">
        <div className="flex flex-col gap-8 max-w-lg mx-auto">
          <OfferCard title="Damen" offers={WomenOffers} />
          <OfferCard title="Herren" offers={MenOffers} />
          <OfferCard title="Nägel" offers={NailOffers} />
        </div>
      </Section>
      <Section id="ueber-mich" title="Über mich">
        <NextImage
          className="block rounded-md shadow-lg"
          src="/valeria_balduzzi.jpg"
          width={1200}
          height={800}
        />
        <p className="mt-4">
          Mein Name ist Valeria Balduzzi. Schon als Kind haben mich Fri­suren
          und äusser­liche Ver­änder­ungen fas­ziniert. Aus diesem Grund habe
          ich mich dazu ent­schieden, eine Lehre als Coiffeuse zu ab­sol­vieren.
          Nach diversen Weiter­bildungen und Berufs­erfahr­ungen bin ich
          schliess­lich zum Ent­schluss gekommen, mich selbst­ständig zu machen.
          Nun freue mich sehr, Sie in meinem eigenen Traum­geschäft in
          Win­ter­thur be­grüssen und be­die­nen zu dürfen!
        </p>
      </Section>
      <Section id="kontakt" title="Kontakt">
        <address className="text-center not-italic">
          Libelle Beauty Lounge <br />
          Badgasse 2 <br />
          8400 Winterthur <br />
          +41 52 536 39 68
        </address>
        <iframe
          className="mt-8"
          width="100%"
          height={400}
          src="https://maps.google.com/maps?q=libelle%20beauty%20shop%20winterthur&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </Section>
      <footer className="p-4 ">© 2021 Libelle Beauty Lounge</footer>
    </main>
  </div>
);

export default Home;
