import { NextPage } from "next";
import NextImage from "next/image";
import { Header } from "../components/header";
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
          className="bg-gradient-to-br from-orange-600 to-orange-400 flex"
        >
          <div className="flex flex-col gap-16 w-full">
            <div className="flex-none text-center">
              <NextImage src="/libelle_logo.svg" width={400} height={150} />
              <p className="italic text-2xl md:text-4xl text-white">
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
        <Section id="angebot" title="Angebot"></Section>
        <Section id="ueber-mich" title="Über mich"></Section>
        <Section id="kontakt" title="Kontakt"></Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
