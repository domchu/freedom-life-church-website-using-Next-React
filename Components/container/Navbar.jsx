import Link from "next/link";
import Images from "../../public/Images";
import Image from "next/image";
import { Button } from "@chakra-ui/react";

const Nav = {
  background: "#000",
  height: "90px",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 5rem",
  textTransform: "uppercase",
};
const StyledLink = {
  margin: "0 1rem",
  fontSize: "1em",
};
const NavLink = {
  alignItems: "center",
  flex: "2",
};
const contact = {
  textTransform: "uppercase",
  flex: "2",
  display: "flex",
  justifyContent: "flex-end",
};
const Logo = {
  flex: "1",
};

const NavLine = {
  height: "100%",
  backgroundColor: "gray",
  width: "2px",
};

const Navbar = () => {
  return (
    <div style={Nav}>
      <div style={Logo}>
        <Link href="/" passHref>
          <a>
            <Image src={Images.logo} alt="" />
          </a>
        </Link>
      </div>
      <div style={NavLine}></div>
      <div style={NavLink}>
        <Link href="/" passHref>
          <a style={StyledLink}>Home</a>
        </Link>
        <Link href="/About" passHref>
          <a style={StyledLink}>About us</a>
        </Link>
        <Link href="/Sermon" passHref>
          <a style={StyledLink}>Sermon</a>
        </Link>
        <Link href="/Blog" passHref>
          <a style={StyledLink}>Blog</a>
        </Link>
      </div>
      <div style={contact}>
        <Link href="/Contact" passHref>
          <Button colorScheme="yellow" size="md" p="7">
            <a style={StyledLink}>CONTACT US</a>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
