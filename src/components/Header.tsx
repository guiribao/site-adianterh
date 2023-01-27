import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderProps from "../interfaces/IHeader";
import contents from "../slides.json";

export default function Header(props: HeaderProps) {
  let i = 0;
  let { content } = props;
  let pageContent = contents[content];

  let [slide, setSlide] = useState({});

  const updateSlide = () => {
    setSlide(pageContent.slides[i]);

    if (i === pageContent.slides.length - 1) {
      i = 0;
      return;
    }

    i += 1;
  };

  useEffect(() => {
    let timerSlide = null;
    updateSlide();

    if (timerSlide) {
      clearInterval(timerSlide);
    }

    timerSlide = setInterval(updateSlide, 10000);
  }, []);

  return (
    <header className="app-header">
      <nav>
        <div className="container app-menu">
          <div className="app-menu_logo">
            <Image src=" ./images/logo.svg" />
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
          <Image src={`./images/draw/${slide?.draw}.svg`} alt="AdianteRH Draw" />
          <p>{slide?.description}</p>
        </div>
      </section>
    </header>
  );
}
