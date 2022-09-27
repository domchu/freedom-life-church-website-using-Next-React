import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import components from "../components.module.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <Box className={components.contact__container}>
        <Box className={components.contact__text}>
          <span className={components.contact__text__text}>contact</span>
          <Text fontSize="2.5rem" fontWeight="bold">
            GET IN TOUCH WITH <br /> OUR CHURCH
          </Text>
        </Box>
      </Box>
      <div className={components.address}>
        <div>
          <Box>
            <span className={components.address__title}>Address</span>
            <Text m="0 0 1rem 0" fontWeight="650" fontSize="1.5rem">
              NH 234 PUBLIC SQUARE <br /> SAN FRANCISCO 65368
            </Text>
          </Box>
          <Box>
            <span className={components.address__title}>Contact Details</span>
            <Text m="0 0 1rem 0" fontWeight="650" fontSize="1.5rem">
              (480) 555-0103 <br /> FINSWEET@EXAMPLE.COM
            </Text>
          </Box>
          <Box>
            <span className={components.address__title}>Find us here</span>
            <Flex className={components.social__contact__icons}>
              <Link href="/" passHref>
                <a>
                  <BsFacebook />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <BsTwitter />
                </a>
              </Link>
              <Link href="/" passHref>
                <a>
                  <BsLinkedin />
                </a>
              </Link>
            </Flex>
          </Box>
        </div>
        <div className={components.form}>
          <span className={components.form__text}>CONTACT FORM:</span>
          <form action="">
            <div>
              <input
                type="text"
                className={components.input}
                placeholder="Your Full Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className={components.input}
                placeholder="Your Email Address"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className={components.input}
                placeholder="Query Related"
                required
              />
            </div>
            <div>
              <textarea
                className={components.message}
                placeholder="Message"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <Link href="/contact" passHref>
              <Button
                background="#ffd2a4"
                size="md"
                p="7"
                m="1rem 0"
                color="#000"
                width="100%"
              >
                <a>SEND MESSAGE</a>
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
