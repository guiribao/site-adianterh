import Head from "next/head";
import Image from "next/image";
import EnterpriseSolutions from "../components/EnterpriseSolutions";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soluções - AdianteRH</title>
      </Head>

      <Header content="solutions" />

      <section className="disclaimer">
        <div className="container">
          <h2>Soluções em Gestão de Pessoas</h2>
          <ul className="disclaimer-list">
            <li>Implantação de RH Estratégico</li>
            <li>Recrutamento e Seleção </li>
            <li>Treinamentos</li>
            <li>Mentoria empresarial</li>
          </ul>
        </div>
      </section>
      
      <EnterpriseSolutions />

      <section className="contato">
        <div className="container">
          <h2>Siga nessa jornada conosco!</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send/?phone=+5551997589087&text=Olá, AdianteRH!"
          >
            Fazer contato
          </a>
        </div>
      </section>
      
      <Footer/>
    </>
  );
}
