import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  background: #000;
  height: 80px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;
const StyledLink = styled.a`
  margin: 0 2rem;
  font-size: 1.5em;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <a>LOGO</a>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
        <Link href="/services" passHref>
          <StyledLink>Services</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
