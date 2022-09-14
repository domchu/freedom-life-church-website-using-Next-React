// import styled from "styled-components";
import Link from "next/link";
import Images from "../../public/Image";
import Image from "next/image";

const Nav = {
  background: "#000",
  height: "80px",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 3rem",
};
const StyledLink = {
  margin: "0 2rem",
  fontSize: "1.5em",
};

const Navbar = () => {
  return (
    <div style={Nav}>
      <div>
        <Link href="/" passHref>
          <a>
            <Image src={Images.logo} alt="" />
          </a>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <a style={StyledLink}>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a style={StyledLink}>About</a>
        </Link>
        <Link href="/blog" passHref>
          <a style={StyledLink}>Blog</a>
        </Link>
        <Link href="/services" passHref>
          <a style={StyledLink}>Services</a>
        </Link>
        <Link href="/contact" passHref>
          <a style={StyledLink}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
