import { NextPage } from "next";
import NextImage from "next/image";
import { FC } from "react";
import { OfferCard } from "../components/offer-card";
import { MenOffers, NailOffers, WomenOffers } from "../data/offers";
import { ChevronIcon } from "../elements/chevron-icon";
import { HomeScreen } from "../elements/home-screen";
import { Section } from "../elements/section";

const LogoBubble: FC = () => (
  <a
    href="#home"
    className="fixed bottom-2 right-2 z-10 flex items-center rounded-full bg-white text-yellow-500 shadow-xl p-2"
  >
    <ChevronIcon />
  </a>
);

const Home: NextPage = () => (
  <div className="flex flex-col text-gray-900">
    <LogoBubble />
    <main className="w-full" id="home">
      <HomeScreen />
      <Section id="angebot" title="Angebot">
        <div className="flex flex-col gap-8">
          <OfferCard
            title="Damen"
            offers={WomenOffers}
            link="preisliste_coiffeur_2020.pdf"
          />
          <OfferCard title="Herren" offers={MenOffers} />
          <OfferCard
            title="Nägel"
            offers={NailOffers}
            link="preisliste_naegel_2020.pdf"
          />
        </div>
      </Section>

      <Section
        id="ueber-mich"
        title="Über mich"
        className="bg-gradient-to-b from-yellow-400 to-yellow-500"
      >
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
          className="mt-8 sm:mb-12"
          width="100%"
          height={400}
          src="https://maps.google.com/maps?q=libelle%20beauty%20shop%20winterthur&t=&z=15&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
        ></iframe>
        <p className="absolute bottom-2">© 2021 Libelle Beauty Lounge</p>
      </Section>
    </main>
  </div>
);

export default Home;
