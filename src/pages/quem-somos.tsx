import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quem somos - AdianteRH</title>
      </Head>

      <Header
        content="start"
      />

      <section className="disclaimer">
        <div className="container">
          <h2>Quem somos</h2>
          <p>A Adiante RH é uma consultoria de RH especializada em gestão de pessoas que ajuda empresas de diversos portes a estruturarem seus processos de RH e melhorar a gestão interna do capital humano, proporcionando a maximização dos resultados. Sabemos que cada cliente tem um perfil diferenciado e necessidades específicas, portanto, contamos com uma equipe profissional qualificada e pronta para prestar atendimento personalizado, prezando sempre pela excelência, agilidade, transparência e inovação em todos os serviços prestados, com foco em resultados.</p>
        </div>
        <div style={{backgroundColor: "#0AA9AF", padding: "10px 0", margin: "80px 0 10px 0"}}>
        <Image src="./images/Logo Whats.png" alt="AdianteRH - Consultoria de Recursos Humanos" style={{margin: "20px auto", display: "block", width: "200px"}}/>
        </div>
      </section>
      <section className="disclaimer">
        <div className="container">
          <h2>Nossa Missão</h2>
          <p>Nossa missão é criar soluções estratégicas qualificadas e rentáveis para a organização, do mesmo modo desenvolver e transformar colaboradores em talentos.</p>
        </div>        
      </section>

      <section className="disclaimer">
        <div className="container">
          <h2>Nossos Valores</h2>
          <ul className="disclaimer-list">
          <li>Excelência e busca constante na qualidade do serviço prestado</li>
          <li>Transparência e confiança em todos nossos relacionamentos</li>
          <li>Inovação e desenvolvimento contínuo nas soluções</li>
          <li>Evolução pessoal e profissional de forma constante</li>
          <li>Rentabilizar e expandir o negócio com excelência organizacional</li>
        </ul>
        </div>
      </section>

      <section className="disclaimer" style={{paddingBottom: "100px"}}>
        <div className="container">
          <h2>Nossa Visão</h2>
          <p>Ser referência na área de atuação, oferecendo a melhor solução em desenvolvimento humano empresarial e individual.</p>
        </div>
      </section>

      <section className="contato">
        <div className="container">
          <h2>Siga nessa jornada conosco!</h2>
          <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=+5551997589087&text=Olá, AdianteRH!">Fazer contato</a>
        </div>
      </section>
      <footer>
        <Image src="./images/logo.svg" alt="Adiante RH" />
        <h5>Adiante RH</h5>
        <svg
          className="cs-ico-instagram"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor">
            <path d="M15.7,7.5c-0.5,0-0.8,0.4-0.8,0.8s0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C16.5,7.9,16.1,7.5,15.7,7.5z"></path>
            <path
              d="M17.7,6.3C17.4,6,17,5.7,16.5,5.5c-0.4-0.2-0.9-0.3-1.7-0.3c-0.7,0-1,0-2.8,0s-2.1,0-2.8,0
                c-0.7,0-1.2,0.1-1.7,0.3C7,5.7,6.6,6,6.3,6.3C5.9,6.7,5.6,7.1,5.5,7.5C5.3,8,5.2,8.5,5.2,9.2c0,0.7,0,1,0,2.8s0,2.1,0,2.8
                c0,0.7,0.1,1.2,0.3,1.7c0.2,0.5,0.4,0.9,0.8,1.2c0.3,0.4,0.8,0.6,1.2,0.8c0.4,0.2,0.9,0.3,1.7,0.3c0.7,0,1,0,2.8,0
                c1.9,0,2.1,0,2.8,0c0.7,0,1.2-0.1,1.7-0.3c0.9-0.4,1.7-1.1,2-2c0.2-0.4,0.3-0.9,0.3-1.7c0-0.7,0-1,0-2.8s0-2.1,0-2.8
                c0-0.7-0.1-1.2-0.3-1.7C18.4,7.1,18.1,6.7,17.7,6.3z M17.6,14.8c0,0.7-0.1,1-0.2,1.3c-0.2,0.6-0.7,1.1-1.3,1.3
                c-0.2,0.1-0.6,0.2-1.3,0.2c-0.7,0-0.9,0-2.8,0c-1.8,0-2.1,0-2.8,0c-0.7,0-1-0.1-1.3-0.2c-0.3-0.1-0.6-0.3-0.8-0.5
                c-0.2-0.2-0.4-0.5-0.5-0.8c-0.1-0.2-0.2-0.6-0.2-1.3c0-0.7,0-0.9,0-2.8c0-1.8,0-2.1,0-2.8c0-0.7,0.1-1,0.2-1.3
                c0.1-0.3,0.3-0.6,0.5-0.8C7.4,7,7.6,6.8,7.9,6.7c0.2-0.1,0.6-0.2,1.3-0.2c0.7,0,0.9,0,2.8,0c1.8,0,2.1,0,2.8,0c0.7,0,1,0.1,1.3,0.2
                c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.5,0.5,0.8c0.1,0.2,0.2,0.6,0.2,1.3c0,0.7,0,0.9,0,2.8C17.6,13.9,17.6,14.1,17.6,14.8z"
            ></path>
            <path
              d="M12,8.5c-2,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5c2,0,3.5-1.6,3.5-3.5S14,8.5,12,8.5z M12,14.3
                c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3s2.3,1,2.3,2.3S13.3,14.3,12,14.3z"
            ></path>
          </g>
          <g strokeWidth="0">
            <circle cx="12" cy="12" r="2.3"></circle>
            <path
              d="M17.4,8c-0.1-0.3-0.3-0.6-0.5-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.2-0.1-0.6-0.2-1.3-0.2c-0.7,0-0.9,0-2.8,0
                c-1.8,0-2.1,0-2.8,0c-0.7,0-1,0.1-1.3,0.2C7.6,6.8,7.4,7,7.1,7.2C6.9,7.4,6.7,7.7,6.6,8C6.5,8.2,6.4,8.6,6.4,9.3c0,0.7,0,0.9,0,2.8
                c0,1.8,0,2.1,0,2.8c0,0.7,0.1,1,0.2,1.3c0.1,0.3,0.3,0.6,0.5,0.8c0.2,0.2,0.5,0.4,0.8,0.5c0.2,0.1,0.6,0.2,1.3,0.2
                c0.7,0,0.9,0,2.8,0c1.8,0,2.1,0,2.8,0c0.7,0,1-0.1,1.3-0.2c0.6-0.2,1.1-0.7,1.3-1.3c0.1-0.2,0.2-0.6,0.2-1.3c0-0.7,0-0.9,0-2.8
                c0-1.8,0-2.1,0-2.8C17.6,8.6,17.5,8.2,17.4,8z M12,15.6c-2,0-3.5-1.6-3.5-3.5S10,8.5,12,8.5c2,0,3.5,1.6,3.5,3.5S14,15.6,12,15.6z
                 M15.7,9.2c-0.5,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8C16.5,8.8,16.1,9.2,15.7,9.2z"
            ></path>
            <path
              d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M18.8,14.9c0,0.7-0.1,1.2-0.3,1.7c-0.4,0.9-1.1,1.7-2,2
                c-0.4,0.2-0.9,0.3-1.7,0.3c-0.7,0-1,0-2.8,0c-1.9,0-2.1,0-2.8,0c-0.7,0-1.2-0.1-1.7-0.3c-0.5-0.2-0.9-0.4-1.2-0.8
                c-0.4-0.3-0.6-0.8-0.8-1.2c-0.2-0.4-0.3-0.9-0.3-1.7c0-0.7,0-1,0-2.8s0-2.1,0-2.8c0-0.7,0.1-1.2,0.3-1.7c0.2-0.5,0.4-0.9,0.8-1.2
                C6.6,6,7,5.7,7.5,5.5c0.4-0.2,0.9-0.3,1.7-0.3c0.7,0,1,0,2.8,0s2.1,0,2.8,0c0.7,0,1.2,0.1,1.7,0.3C17,5.7,17.4,6,17.7,6.3
                c0.4,0.3,0.6,0.8,0.8,1.2c0.2,0.4,0.3,0.9,0.3,1.7c0,0.7,0,1,0,2.8S18.9,14.2,18.8,14.9z"
            ></path>
          </g>
        </svg>
        <p>(51) 99758-9087</p>
        <p>contato@adianterh.com.br</p>
        <p>Porto Alegre - RS</p>
      </footer>
    </>
  );
}
