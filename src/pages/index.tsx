import { NextPage } from "next";
import NextImage from "next/image";
import { Header } from "../components/header";
import { Footer } from "../elements/footer";
import { Section } from "../elements/section";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="w-full p-12 flex-1" id="home">
        <div className="text-center">
          <NextImage src="/dragonfly_line.svg" width={400} height={300} />
        </div>
        <Section id="angebot" title="Angebot"></Section>
        <Section id="ueber-mich" title="Über mich"></Section>
        <Section id="kontakt" title="Kontakt"></Section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
