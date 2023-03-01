import Image from "next/image";
import logo from "../../public/images/logo.svg";
import iconInstagram from "../../public/images/icon_instagram.png";

const Footer = () => {
  return (
    <footer>
      <Image className="footer-logo" src={logo} alt="Adiante RH" />
      <h5>Instagram</h5>
      <a
        href="https://www.instagram.com/adianterh/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={iconInstagram}
          className="footer-insta"
          width="48"
          height="48"
          alt="Seguir no insta!"
        />
      </a>
      <p>(51) 99303-6018</p>
      <p>
        <a href="mailto:consultoria@adianterh.com.br">
          consultoria@adianterh.com.br
        </a>
      </p>
      <p>Atendemos todo território nacional</p>
    </footer>
  );
};

export default Footer;
