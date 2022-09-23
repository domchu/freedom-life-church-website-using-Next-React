import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import components from "../components.module.css";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <>
      <Box className={components.contact__container}>
        <Box className={components.contact__text}>
          <span>contact</span>
          <Text>
            GET IN TOUCH WITH <br /> OUR CHURCH
          </Text>
        </Box>
      </Box>
      <div className={components.address}>
        <Box>
          <span>Address</span>
          <Text>
            NH 234 PUBLIC SQUARE <br /> SAN FRANCISCO 65368
          </Text>
        </Box>
        <Box>
          <span>Contact Details</span>
          <Text>
            (480) 555-0103 <br /> FINSWEET@EXAMPLE.COM
          </Text>
        </Box>
        <Box>
          <span>Find us here</span>
          <Flex style={{}}>
            <Link href="/" passHref>
              <a>
                <BsFacebook color="#ffd2a4" />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <BsTwitter color="#ffd2a4" />
              </a>
            </Link>
            <Link href="/" passHref>
              <a>
                <BsLinkedin color="#ffd2a4" />
              </a>
            </Link>
          </Flex>
        </Box>
        <div className={components.form}>
          <span>CONTACT Form</span>
          <form action="">
            <div>
              <input
                type="text"
                className={components.input}
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <input
                type="email"
                className={components.input}
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <input
                type="text"
                className={components.input}
                placeholder="Query Related"
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
            <Button>Send Message</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
