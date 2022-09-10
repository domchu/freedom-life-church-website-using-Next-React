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

const Navbar = () => {
  return (
    <Nav>
      <div className="navlink">
        <Link href="/">
          <a>LOGO</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
