import { Box, Text } from "@chakra-ui/react";
import components from "../components.module.css";
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
    </>
  );
};

export default Contact;
