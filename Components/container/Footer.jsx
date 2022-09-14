import styled from "styled-components";
import components from "../components.module.css";

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
      Copyright &copy; Next/React by Mr Dominic 2022 all right reserved
    </footer>
  );
};

export default Footer;
