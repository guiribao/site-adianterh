import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer"
import EnterpriseSolutions from "../components/EnterpriseSolutions";
export default function Home() {
  return (
    <>
      <Head>
        <title>Contato - AdianteRH</title>
      </Head>

      <Header
        content="contact"
      />

      <EnterpriseSolutions />
      
      <section className="contato">
        <div className="container">
          <h2>Siga nessa jornada conosco!</h2>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=+5551997589087&text=Olá, AdianteRH!">Fazer contato</a>
        </div>
      </section>

      <Footer />

    </>
  );
}
