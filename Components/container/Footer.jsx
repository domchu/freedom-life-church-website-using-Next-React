import styled from "styled-components";

const FooterSection = styled.div`
  background-color: #000;
  color: #fff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => {
  return (
    <FooterSection>
      Copyright &copy; Next/React by Mr Dominic 2022 all right reserved
    </FooterSection>
  );
};

export default Footer;
