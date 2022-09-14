import Image from "next/image";
import Images from "../../public/Image";
import components from "../components.module.css";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

const Section = {
  backgroundColor: "#000",
  color: "#fff",
  height: "50vh",
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
        <Text fontSize="sm" fontStyle="600" margin=".7rem 0 2rem 0">
          &copy; FINSWEET 2022
        </Text>
        <Text fontSize="sm" fontStyle="600" margin=".5rem 0">
          (480) 590 2316
        </Text>
        <Text fontSize="sm" fontStyle="600" margin=".5rem 0">
          4517 WASHINGTON AVE.
        </Text>
        <Text fontSize="sm" fontStyle="600" margin=".5rem 0">
          FINSWEET@EXAMPLE.COM
        </Text>
      </div>
      <div>
        <span>QUICKLINKS</span>
        <div style={components.QuickLinks}>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
          <Link href="/about" passHref>
            <a>About us</a>
          </Link>
          <Link href="/services" passHref>
            <a>Sermon</a>
          </Link>
          <Link href="/blog" passHref>
            <a>Blog</a>
          </Link>
        </div>
      </div>

      {/* Copyright &copy; Next/React by Mr Dominic 2022 all right reserved */}
    </footer>
  );
};

export default Footer;
