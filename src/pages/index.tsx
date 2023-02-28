import Head from "next/head";
import Image from "next/image";
import EnterpriseSolutions from "../components/EnterpriseSolutions";
import Footer from "../components/Footer";
import Header from "../components/Header";

import iconWhatsapp from "../../public/images/icon_whatsapp.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início - AdianteRH</title>
        <meta
          name="description"
          content="AdianteRH Consultoria de Recursos Humanos - Especializada em soluções para o recurso mais importante da sua empresa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Header content="home" />

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
