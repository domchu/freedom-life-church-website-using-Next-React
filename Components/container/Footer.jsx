import styled from "styled-components";

const FooterSection = {
  backgroundColor: "#000",
  color: "#fff",
  height: "60px",
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
};

const Footer = () => {
  return (
    <Footer style={FooterSection}>
      Copyright &copy; Next/React by Mr Dominic 2022 all right reserved
    </Footer>
  );
};

export default Footer;
