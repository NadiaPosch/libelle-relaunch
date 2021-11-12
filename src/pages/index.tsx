import { NextPage } from "next";
import NextImage from "next/image";
import { Header } from "../components/header";
import { OfferCard } from "../components/offer-card";
import { MenOffers, NailOffers, WomenOffers } from "../data/offers";
import { Dragonfly } from "../elements/dragonfly";
import { Footer } from "../elements/footer";
import { Section } from "../elements/section";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="w-full" id="home">
        <Section
          id="home"
          className="bg-gradient-to-br from-yellow-600 to-yellow-400 flex"
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
        <Section id="ueber-mich" title="Über mich"></Section>
        <Section id="kontakt" title="Kontakt"></Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
