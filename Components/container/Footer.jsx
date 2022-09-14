import Image from "next/image";
import Images from "../../public/Image";
import components from "../components.module.css";
import Link from "next/link";

const Section = {
  backgroundColor: "#000",
  color: "#fff",
  height: "60px",
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
};

const Footer = () => {
  return (
    <footer style={Section}>
      <div>
        <Link href="/" passHref>
          <a>
            <Image src={Images.logo} alt="" />
          </a>
        </Link>
      </div>
      Copyright &copy; Next/React by Mr Dominic 2022 all right reserved
    </footer>
  );
};

export default Footer;
