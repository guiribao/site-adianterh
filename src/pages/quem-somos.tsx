import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

import logoCirculo from "../../public/images/logo_circulo.png";
import iconWhatsapp from "../../public/images/icon_whatsapp.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quem somos - AdianteRH</title>
      </Head>

      <Header content="home" />

      <section className="disclaimer">
        <div className="container">
          <h2>Quem somos</h2>
          <p>
            A Adiante RH é uma consultoria de RH especializada em gestão de
            pessoas que ajuda empresas de diversos portes a estruturarem seus
            processos de RH e melhorar a gestão interna do capital humano,
            proporcionando a maximização dos resultados. Sabemos que cada
            cliente tem um perfil diferenciado e necessidades específicas,
            portanto, contamos com uma equipe profissional qualificada e pronta
            para prestar atendimento personalizado, prezando sempre pela
            excelência, agilidade, transparência e inovação em todos os serviços
            prestados, com foco em resultados.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#0AA9AF",
            padding: "30px 0",
            margin: "80px 0 10px 0",
          }}
        >
          <Image
            src={logoCirculo}
            alt="AdianteRH - Consultoria de Recursos Humanos"
            style={{
              margin: "20px auto",
              display: "block",
              width: "180px",
              height: "auto",
            }}
          />
        </div>
      </section>
      <section className="disclaimer">
        <div className="container">
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é criar soluções estratégicas qualificadas e rentáveis
            para a organização, do mesmo modo desenvolver e transformar
            colaboradores em talentos.
          </p>
        </div>
      </section>

      <section className="disclaimer">
        <div className="container">
          <h2>Nossos Valores</h2>
          <ul className="disclaimer-list">
            <li>
              Excelência e busca constante na qualidade do serviço prestado
            </li>
            <li>Transparência e confiança em todos nossos relacionamentos</li>
            <li>Inovação e desenvolvimento contínuo nas soluções</li>
            <li>Evolução pessoal e profissional de forma constante</li>
            <li>
              Rentabilizar e expandir o negócio com excelência organizacional
            </li>
          </ul>
        </div>
      </section>

      <section className="disclaimer" style={{ paddingBottom: "100px" }}>
        <div className="container">
          <h2>Nossa Visão</h2>
          <p>
            Ser referência na área de atuação, oferecendo a melhor solução em
            desenvolvimento humano empresarial e individual.
          </p>
        </div>
      </section>

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
