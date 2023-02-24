import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import IHeader from "../interfaces/IHeader";
import IContent, { ISlide } from "../interfaces/IContent";
import contents from "../slides.json";

export default function Header(props: IHeader) {
  let content: string = props.content;
  let objContent = JSON.parse(JSON.stringify(contents));
  let pageContent: IContent = objContent[content];

  var i = 0;
  let [slide, setSlide] = useState(pageContent.slides[i]);

  useEffect(() => {
    var slideInterval = null;

    if (slideInterval != null) {
      clearInterval(slideInterval);
    }

    slideInterval = setInterval(() => {
      i = (i+1 == pageContent.slides.length) ? 0 : ++i;
      setSlide(pageContent.slides[i]);
    }, 7000);

  }, []);

  let Slide = () => {
    return (
      <>
        <Image
          src={`${process.env.NEXT_PUBLIC_APP_URL}/images/draw/${slide?.draw}.svg`}
          width="100"
          height="100"
          alt="AdianteRH Draw"
        />
        <p>{slide?.description}</p>
      </>
    );
  };

  return (
    <header className="app-header">
      <nav>
        <div className="container app-menu">
          <div className="app-menu_logo">
            <Image
              src=" ./images/logo.svg"
              alt="Adiante RH - Consultoria de Recursos Humanos"
              width="100"
              height="100"
            />
          </div>
          <ul className="app-menu_links">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/quem-somos">Quem somos</Link>
            </li>
            <li>
              <Link href="/solucoes">Soluções</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="app-description">
        <div className="app-description__manifest">
          <h2>{pageContent.title}</h2>
          <p>
            <span>{pageContent.subtitle}</span>
          </p>
        </div>
        <div className="app-description__art">
          {pageContent.slides.length ? <Slide></Slide> : ""}
        </div>
      </section>
    </header>
  );
}
