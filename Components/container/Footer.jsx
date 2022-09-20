import Image from "next/image";
import Images from "../../public/Images";
// import components from "../components.module.css";
import Link from "next/link";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Section = {
  backgroundColor: "#000",
  color: "#fff",
  height: "50vh",
  display: " flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const QuickLink = {
  display: "flex",
  flexDirection: "column",
};
const Anchor = {
  margin: ".2rem 0 .9rem",
};
const Connect = {
  color: "#fff",
  display: " flex",
  fontSize: "1rem",
  cursor: "pointer",
  margin: "0 2rem 0",
};
const ConnectText = {
  fontSize: "2rem",
};
const Search = {
  padding: "1rem",
  borderRadius: "5px",
  color: "#fff",
  // size: "md",
  border: "none",
  backgroundColor: "transparent",
  border: "1px solid gray",
};

const Footer = () => {
  return (
    <div>
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
          <span>QUICK LINKS</span>
          <div style={QuickLink}>
            <Link href="/" passHref>
              <a style={Anchor}>Home</a>
            </Link>
            <Link href="/About" passHref>
              <a style={Anchor}>About us</a>
            </Link>
            <Link href="/Services" passHref>
              <a style={Anchor}>Sermon</a>
            </Link>
            <Link href="/Blog" passHref>
              <a style={Anchor}>Blog</a>
            </Link>
          </div>
        </div>
        <div style={{ height: "180px" }}>
          <h3 style={ConnectText}>Connect</h3>
          <Flex style={(Connect, { justifyContent: "space-around" })}>
            <BsFacebook />
            <BsTwitter />
            <BsLinkedin />
          </Flex>
        </div>
        <div>
          <Text fontSize="4xl">
            SUBSCRIBE TO GET LATEST <br /> UPDATES AND NEWS
          </Text>
          <div height="60px" display="flex">
            <input
              type="text"
              name=""
              placeholder="Youremail@gmail.com"
              style={Search}
            />
            <Button colorScheme="yellow" size="md" p="7" m="2rem 0">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </footer>
      <Text
        display="flex"
        justifyContent="center"
        // alignItems="center"
        backgroundColor="#000"
        color="#fff"
        fontSize="1.5rem"
      >
        &copy; Copyright 2022 all right reserved Next/React by Mr Dominic
      </Text>
    </div>
  );
};

export default Footer;
