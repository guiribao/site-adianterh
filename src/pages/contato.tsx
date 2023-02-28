import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnterpriseSolutions from "../components/EnterpriseSolutions";

import iconWhatsapp from "../../public/images/icon_whatsapp.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contato - AdianteRH</title>
      </Head>

      <Header content="contact" />

      <EnterpriseSolutions />

      <section className="contato">
        <div className="container">
          <h2>Siga nessa jornada conosco!</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send/?phone=+5551993036018&text=Olá, AdianteRH!"
          >
            <Image
              src={iconWhatsapp}
              width="20"
              height="20"
              alt="Chamar no whatsapp!"
            />
            Fazer contato
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
