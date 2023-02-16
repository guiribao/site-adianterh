import Image from "next/image";
import metricas from "../../public/images/metricas.png";
import livro from "../../public/images/livro.png";
import globo from "../../public/images/globo.png";

const EnterpriseSolutions = () => {
  return (<section className="solucoes">
  <div className="container">
    <h2>Para sua empresa!</h2>
  </div>
  <section className="container solucoes-list">
    <div>
      <Image src={metricas} width="0" height="0" alt="Metricas" />
      <h5>Estruturação</h5>
      <p>
        Ajudamos você e sua empresa a estruturar processos na área de
        gestão de pessoas.
      </p>
    </div>
    <div>
      <Image src={livro} width="0" height="0" alt="Livros" />
      <h5>Capacitação</h5>
      <p>Oferecemos capacitação para empresas de todos os portes.</p>
    </div>
    <div>
      <Image src={globo} width="0" height="0" alt="Globo" />
      <h5>Personalização</h5>
      <p>
        Todos os nossos serviços são personalizados para atender a sua
        empresa e o seu negócio.
      </p>
    </div>
  </section>
</section>)
}

export default EnterpriseSolutions;